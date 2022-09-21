import numpy as np 
import pandas as pd

import os
from itertools import combinations
from pathlib import Path 


#model related
import torch
from torchvision import transforms
from PIL import Image


#feature extraction related: 
from torchvision.models.feature_extraction import get_graph_node_names
from torchvision.models.feature_extraction import create_feature_extractor
from torch.nn import CosineSimilarity


import pickle
import time




def return_informative_nodes(all_nodes,feature_extractor):
    # This function computes the similarity between the activations of two images across all layers (all nodes dic)
    # and drops the layers that do not hold new information
    layer_similarity_tolernace=0.00001
    all_nodes_reveresed={val:key for key,val in all_nodes.items()}

    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),  
    ])

    image1 = Image.fromarray(np.random.randint(low=0,high=255,size=[224,224,3],dtype=np.uint8))
    image2 = Image.fromarray(np.random.randint(low=0,high=255,size=[224,224,3],dtype=np.uint8))

    processed_image1=preprocess(image1).unsqueeze(0)
    processed_image2=preprocess(image2).unsqueeze(0)

    features_dict1=feature_extractor(processed_image1)
    features_dict2=feature_extractor(processed_image2)

    
    #make sure we only work with torch.Tensor types (and not torch.Size, or int, or NoneType, that are the output of the network attributes and not really feature activations)
    features_dict1_temp=dict()
    features_dict2_temp=dict()
    no_numeric_nodes=[]
    params_nodes=[]
    for key,val in features_dict1.items():
        if isinstance(val,torch.Tensor):
            if not isinstance(val,torch.nn.parameter.Parameter):
                features_dict1_temp[key]=val
                features_dict2_temp[key]=features_dict2[key]
            else:
                params_nodes.append(key)
        else: 
            no_numeric_nodes.append(key)


    distances, layers_sizes = compare_image_similarity_from_loaded_feature_dicts(features_dict1_temp,features_dict2_temp,CosineSimilarity(0))

    # keeping only layers that have information (removing duplicates)
    df_similarity_layers = pd.DataFrame(distances,index = features_dict1_temp.keys(),columns=['similarity'])
    #find consecutive layers with the same simliarity (drop the earlier ones)
    dup_indexes=np.where(np.abs(np.diff(distances))<layer_similarity_tolernace)[0]+1
    #find layers with a similarity of exactly 1 (and remove it, as its most likely an irrelevant layer:
    dup_indexes=np.concatenate([dup_indexes,np.where(df_similarity_layers==1)[0]])
    #drop layers with duplicate information: 
    df_similarity_layers.drop(df_similarity_layers.index[dup_indexes],inplace=True)
    good_nodes = df_similarity_layers.index
    return_nodes_original = {all_nodes_reveresed[level]:level for level in good_nodes}
    return_nodes =  {key:'level_'+str(num) for key,num in zip(return_nodes_original.keys(),range(len(return_nodes_original)))}

    return return_nodes,return_nodes_original




def generate_feature_extractor(model, features_dict={}):

    _ , eval_nodes= get_graph_node_names(model)
    if any(features_dict): #verify thgat the requested features are actually named features in the model
        status=1
        bad_nodes=[]
        for node in features_dict.keys():
            if not(node in eval_nodes):
                status=0
                bad_nodes.append(node)

        if status==0: #there is a mismatch:
            print('bad nodes:',bad_nodes)
            informative_nodes ={}
            feature_extractor_model={}
            raise Exception('some of the requested layer are not part of the named layers in the network:',bad_nodes)

        else:
            informative_nodes = features_dict
            informative_nodes_original = features_dict
        


    else: #if the requested features were not defined, infer them from the named features of the model

        features_dict = {node:'level_'+str(i) for i,node in enumerate(eval_nodes)}
        #get rid of non informative features: 
        temp_feature_extractor=create_feature_extractor(model,return_nodes=features_dict)     
        informative_nodes,informative_nodes_original = return_informative_nodes(features_dict,temp_feature_extractor)
        
    feature_extractor_model = create_feature_extractor(model,return_nodes=informative_nodes)

    return feature_extractor_model,informative_nodes,informative_nodes_original




def process_and_extract_activations_from_folder(FULL_PATH_PARENT_FOLDER,IMAGES_FOLDER_NAME,pre_trained_model,features_dict={}, images_type = 'jpg'):
    
    model_name = pre_trained_model._get_name()

    ## if feature_extractor is empty - define a feature extractor based on 2 randomly generated images similarity 
    model_feature_extractor,informative_nodes,return_nodes_original = generate_feature_extractor(pre_trained_model, features_dict)
    
    ## define the location of the img categories folder
    p = Path(FULL_PATH_PARENT_FOLDER).glob('**/*.' + images_type)

    fullpaths = [x for x in p if x.is_file()]


    images_names = []
    sub_folders = []
    for path in fullpaths:
        filename = path.name
        subfolder = path.parent.name
        images_names.append(filename)
        if path.parent==FULL_PATH_PARENT_FOLDER: #if the file is in the main directory
            subfolder=''
        sub_folders.append(subfolder)
    images_info = pd.DataFrame(data={'img_name':images_names,'sub_folder':sub_folders,'full_path_to_img':fullpaths})


    ## define the preprocessing pipeline: resizing and cropping then using the trained batch mean and std to normalize the color chanels
    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),  
    ])


    total_folders = images_info['sub_folder'].unique()
    
    processed_full_paths=[]
    for folder in total_folders:

        
        file_name = 'images_info_' + folder +'.csv'

        current_images_info =  images_info[images_info['sub_folder'] == folder]

        
        for name,full_path_to_img in current_images_info[['img_name','full_path_to_img']].values:
            cur_img=Image.open(full_path_to_img)
            processed_image=preprocess(cur_img)
            processed_image_save_location=Path(str(full_path_to_img).replace(FULL_PATH_PARENT_FOLDER.name,(FULL_PATH_PARENT_FOLDER.name+'_processed_'+model_name)))
            processed_image_save_location_file_name=processed_image_save_location.parent
            if not os.path.exists(processed_image_save_location_file_name):
                os.makedirs(processed_image_save_location_file_name)

            torch.save(processed_image,Path(str(processed_image_save_location).replace('.jpg','.pt')))
            # save the full paths so we can add another column to the images_info dataframe
            processed_full_paths.append(Path(str(processed_image_save_location).replace('.jpg','.pt')))
                
    images_info['full_path_to_processed_img']=processed_full_paths
    

    # extract activation from all layers 
    file_name = 'images_info_' + IMAGES_FOLDER_NAME +'.csv'
    images_info=extract_feature_vectors_for_all_images(FULL_PATH_PARENT_FOLDER,model_feature_extractor,model_name= model_name,images_info_df=images_info.copy(),features_folder_name='features')
    
    # saving images info and informative nodes 
    images_info.to_csv(file_name,index=False)
    with open('informative_nodes.pickle', 'wb') as handle:
        pickle.dump(informative_nodes, handle)

    with open('informative_nodes.pickle','wb') as handle:
        pickle.dump(informative_nodes,handle)
        pickle.dump(return_nodes_original,handle)

        
    return images_info , informative_nodes,return_nodes_original




def extract_activations(tensors_location,image_tensor_name,feature_extractor):
#inputs: 
#tensors_location - folder containing all preprocessed images as .pt files
#image_tensor_name - the currnet file name i.e. 0101.pt
#feature_extractor - the feature extractor object (as returned from "create_feature_extractor")

#returns a dictionary with the activations for that image from every layer that was selected
  input_tensor1 = torch.load(os.path.join(tensors_location,image_tensor_name))
  input_batch1 = input_tensor1.unsqueeze(0)
# forward pass the image trough the ML model, and extract the output of the requested features: 
  features_dict=feature_extractor(input_batch1)

  return features_dict



def compare_image_similarity_pickled_features(FULL_PATH_PARENT_FOLDER,features_folder,im1_pickle_name,im2_pickle_name,cat1,cat2,distance_matrix):
  #features_folder - location where the feature dicationaries were save (.pk)
  #im1_pickle_name,im2_pickle_name - the names of two files (.pt) representing the activations of two imabes
  #distance_matrix (how to compare between the activation vectors - i.e. Cosinesimialrity)
  distances=[]
  layers_flattened_sizes=[]

  im1_file = open(os.path.join(str(FULL_PATH_PARENT_FOLDER.parent),features_folder,cat1,im1_pickle_name), "rb")
  im2_file = open(os.path.join(str(FULL_PATH_PARENT_FOLDER.parent),features_folder,cat2,im2_pickle_name), "rb")


  im1_features_dict = pickle.load(im1_file)
  im2_features_dict = pickle.load(im2_file)

  im1_file.close()
  im2_file.close()

  im1_features_dict
  for key in im1_features_dict.keys():
    layer_features_im1=im1_features_dict[key].flatten()
    layer_features_im2=im2_features_dict[key].flatten()
    distance=distance_matrix(layer_features_im1,layer_features_im2).detach().numpy()
    distances.append(distance)
    layers_flattened_sizes.append(layer_features_im1.shape)

  return distances,layers_flattened_sizes


def compare_image_similarity_from_loaded_feature_dicts(im1_dict,im2_dict,distance_matrix):
  #features_folder - location where the feature dicationaries were save (.pk)
  #im1_pickle_name,im2_pickle_name - the names of two files (.pt) representing the activations of two imabes
  #distance_matrix (how to compare between the activation vectors - i.e. Cosinesimialrity)
  distances=[]
  layers_flattened_sizes=[]

  im1_features_dict = im1_dict
  im2_features_dict = im2_dict


  im1_features_dict
  for key in im1_features_dict.keys():
    layer_features_im1=im1_features_dict[key].flatten()
    layer_features_im2=im2_features_dict[key].flatten()
    distance=distance_matrix(layer_features_im1,layer_features_im2).detach().numpy()
    distances.append(distance)
    layers_flattened_sizes.append(layer_features_im1.shape)

  return distances,layers_flattened_sizes





def extract_feature_vectors_for_all_images(FULL_PATH_PARENT_FOLDER,feature_extractor,model_name: str,images_info_df:pd.DataFrame,features_folder_name:str='features'):

    print(f'extracting {model_name} features')
    paths_to_features_vectors=[]

    for name,full_path_to_img in images_info_df[['img_name','full_path_to_processed_img']].values:
        features_image_save_location = Path(str(full_path_to_img).replace('processed',features_folder_name))
        
        features_image_save_location_file_name=features_image_save_location.parent
        if not os.path.exists(features_image_save_location_file_name):
            os.makedirs(features_image_save_location_file_name)


        features_dict=extract_activations('',full_path_to_img,feature_extractor)
        cur_features_file = open(Path(str(features_image_save_location).replace('.pt','.pkl')),'wb')
        pickle.dump(features_dict, cur_features_file )
        cur_features_file.close()
        paths_to_features_vectors.append(Path(str(features_image_save_location).replace('.pt','.pkl')))
    images_info_df['full_path_to_features_'+model_name]=paths_to_features_vectors
    
    return images_info_df



def run_sim_on_all_possible_pairs(FULL_PATH_PARENT_FOLDER,images_info_df,return_nodes_dict,model):


    model_name = model._get_name()
    model_features_folder_name = FULL_PATH_PARENT_FOLDER.name +'_features_' + model_name

    similarity_df=pd.DataFrame()
    all_pairs_length=len(list(combinations(images_info_df['img_name'].values,2)))
    all_pairs=combinations(images_info_df['img_name'].values,2)

    cat1_tot = []
    cat2_tot = []

    for i,(im1_name,im2_name) in enumerate(all_pairs): 
        #estimate run time: 
        if i==0:
            start=time.time()

        cat1 = images_info_df[images_info_df['img_name'] == im1_name].iloc[0]['sub_folder']
        cat2 = images_info_df[images_info_df['img_name'] == im2_name].iloc[0]['sub_folder']

        cat1_tot.append(cat1)
        cat2_tot.append(cat2)

        distances,_=compare_image_similarity_pickled_features(FULL_PATH_PARENT_FOLDER,model_features_folder_name,im1_name.replace('.jpg','.pkl'),im2_name.replace('.jpg','.pkl'),cat1,cat2,CosineSimilarity(0))
        pair_line=pd.DataFrame(columns=['image1','image2']+list(return_nodes_dict.values()),index=[i])
        pair_line[['image1','image2','model']]=im1_name.replace('.jpg','.pkl'),im2_name.replace('.jpg','.pkl'),model_name
        pair_line[[colname for colname in pair_line.columns if colname in return_nodes_dict.values()]]=distances
        similarity_df=pd.concat([similarity_df,pair_line],axis=0)
        
        if i==0: 
            end=time.time()
            elapsed=end-start
            print(f'estimated time: first sample took {elapsed:.3f}, all pairs: {all_pairs_length} is estimated to take {elapsed*all_pairs_length/60:.3f} minutes')

        if np.mod(i,500)==0 and not(i==0):
            print(' iteration #', i)
    
    """if len( list(zip(cat1_tot,cat2_tot)))==0:
        similarity_df[['category1', 'category2']]=["",""]
    else:"""
    
    similarity_df[['category1', 'category2']] = list(zip(cat1_tot,cat2_tot))
        
    file_name = 'similarity_between_pairs_' + model_name + '_.csv'
    similarity_df.to_csv(file_name,index=False)    

    return similarity_df






def create_image_matches_dataframe(similarity_df,n_match,additional_sim_columns=[],to_plot=True):
 

    relevant_columns=[col for col in similarity_df.columns if 'level_' in col ] 
    unique_images=np.unique(np.concatenate((similarity_df['image1'].values,similarity_df['image2'].values)))

    #add the custom similarity columns
    match_cols = relevant_columns
    relevant_columns = relevant_columns + additional_sim_columns


    best_pairs_allinfo_df=pd.DataFrame(columns = relevant_columns, index = unique_images, dtype=object)
    best_pairs_allinfo_simvals_df=pd.DataFrame(columns = relevant_columns, index = unique_images, dtype=object)

    col_matches_prop=[]
    for colind,col in enumerate(relevant_columns):
        for img in unique_images:
            #get only info on pairs containing the current image
            temp_df=similarity_df[(similarity_df['image1']==img) | (similarity_df['image2']==img)]
            #sort from highest to lowest
            best_pairs_df=temp_df.sort_values(by=col,ascending=False).reset_index()
            #keep the n_match best pairs for the current image
            #check wether a match (same last digits of the image name) occured within the n_match
            is_match=any([pair[0][2:4]==pair[1][2:4] for pair in best_pairs_df.iloc[:n_match][['image1','image2']].values])  
            #add to a list tracking all matches within that column
            #get the names of the best n_match images: 
            matches_names=[name for name in best_pairs_df.iloc[:n_match][['image1','image2']].values.flatten() if not(name==img)]
            matches_sim_vals=[name for name in best_pairs_df.iloc[:n_match][col].values.flatten()]

            best_pairs_allinfo_df.loc[img,relevant_columns[colind]]=matches_names
            best_pairs_allinfo_simvals_df.loc[img,relevant_columns[colind]]=matches_sim_vals

    return best_pairs_allinfo_df,best_pairs_allinfo_simvals_df




    

