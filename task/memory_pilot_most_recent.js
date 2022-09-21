/********************************* 
 * Memory_Pilot_Most_Recent Test *
 *********************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'memory_pilot_most_recent';  // from the Builder filename that created this script
let expInfo = {
    'workID': '',
    'Age': '',
    'Gender': '',
    'Hours slept (last night)': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(slide1RoutineBegin());
flowScheduler.add(slide1RoutineEachFrame());
flowScheduler.add(slide1RoutineEnd());
flowScheduler.add(slide2RoutineBegin());
flowScheduler.add(slide2RoutineEachFrame());
flowScheduler.add(slide2RoutineEnd());
flowScheduler.add(slide3RoutineBegin());
flowScheduler.add(slide3RoutineEachFrame());
flowScheduler.add(slide3RoutineEnd());
const demo_encoding_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(demo_encoding_loopLoopBegin(demo_encoding_loopLoopScheduler));
flowScheduler.add(demo_encoding_loopLoopScheduler);
flowScheduler.add(demo_encoding_loopLoopEnd);
flowScheduler.add(before_test_instructionsRoutineBegin());
flowScheduler.add(before_test_instructionsRoutineEachFrame());
flowScheduler.add(before_test_instructionsRoutineEnd());
const demo_test_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(demo_test_loopLoopBegin(demo_test_loopLoopScheduler));
flowScheduler.add(demo_test_loopLoopScheduler);
flowScheduler.add(demo_test_loopLoopEnd);
flowScheduler.add(before_exp_instructionsRoutineBegin());
flowScheduler.add(before_exp_instructionsRoutineEachFrame());
flowScheduler.add(before_exp_instructionsRoutineEnd());
flowScheduler.add(slide2RoutineBegin());
flowScheduler.add(slide2RoutineEachFrame());
flowScheduler.add(slide2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(before_test_instructionsRoutineBegin());
flowScheduler.add(before_test_instructionsRoutineEachFrame());
flowScheduler.add(before_test_instructionsRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(final_screenRoutineBegin());
flowScheduler.add(final_screenRoutineEachFrame());
flowScheduler.add(final_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);



psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
     
    {'name': '2460547467-349423.jpg', 'path': '2460547467-349423.jpg'},
    {'name': '2238560245-182099.jpg', 'path': '2238560245-182099.jpg'},
    {'name': '2868474407-362885.jpg', 'path': '2868474407-362885.jpg'},
    {'name': '2901942443-69925.jpg', 'path': '2901942443-69925.jpg'},
    {'name': '2901941438-69835.jpg', 'path': '2901941438-69835.jpg'},
    {'name': '2898618444-142233.jpg', 'path': '2898618444-142233.jpg'},
    {'name': '2449442529-124446.jpg', 'path': '2449442529-124446.jpg'},
    {'name': '2238117096-228518.jpg', 'path': '2238117096-228518.jpg'},
    {'name': '2883268471-290843.jpg', 'path': '2883268471-290843.jpg'},
    {'name': '2964217461-294238.jpg', 'path': '2964217461-294238.jpg'},
    {'name': '2592380177-354626.jpg', 'path': '2592380177-354626.jpg'},
    {'name': '2237858942-299356.jpg', 'path': '2237858942-299356.jpg'},
    {'name': '2874301407-363895.jpg', 'path': '2874301407-363895.jpg'},
    {'name': '2237857458-1324.jpg', 'path': '2237857458-1324.jpg'},
    {'name': '2446759306-271734.jpg', 'path': '2446759306-271734.jpg'},
    {'name': '2238425482-313537.jpg', 'path': '2238425482-313537.jpg'},
    {'name': '2981231446-294732.jpg', 'path': '2981231446-294732.jpg'},
    {'name': '2238436252-314037.jpg', 'path': '2238436252-314037.jpg'},
    {'name': '2238481928-19949.jpg', 'path': '2238481928-19949.jpg'},
    {'name': '2460547467-349422.jpg', 'path': '2460547467-349422.jpg'},
    {'name': '2898617468-68274.jpg', 'path': '2898617468-68274.jpg'},
    {'name': '2898627427-366763.jpg', 'path': '2898627427-366763.jpg'},
    {'name': '2238480980-168129.jpg', 'path': '2238480980-168129.jpg'},
    {'name': '2964216376-294181.jpg', 'path': '2964216376-294181.jpg'},
    {'name': '2427874231-269884.jpg', 'path': '2427874231-269884.jpg'},
    {'name': '2864904453-63933.jpg', 'path': '2864904453-63933.jpg'},
    {'name': '2238573447-333826.jpg', 'path': '2238573447-333826.jpg'},
    {'name': '2883268471-290842.jpg', 'path': '2883268471-290842.jpg'},
    {'name': '2864900319-137787.jpg', 'path': '2864900319-137787.jpg'},
    {'name': '2864906345-212360.jpg', 'path': '2864906345-212360.jpg'},
    {'name': '2427873848-47312.jpg', 'path': '2427873848-47312.jpg'},
    {'name': '2427873763-47290.jpg', 'path': '2427873763-47290.jpg'},
    {'name': '2883264367-365620.jpg', 'path': '2883264367-365620.jpg'},
    {'name': '2964221435-219434.jpg', 'path': '2964221435-219434.jpg'},
    {'name': '2238550049-105691.jpg', 'path': '2238550049-105691.jpg'},
    {'name': '2981240427-370099.jpg', 'path': '2981240427-370099.jpg'},
    {'name': '2446758985-197609.jpg', 'path': '2446758985-197609.jpg'},
    {'name': '2883268412-365898.jpg', 'path': '2883268412-365898.jpg'},
    {'name': '2984615361-295509.jpg', 'path': '2984615361-295509.jpg'},
    {'name': '2238571930-184143.jpg', 'path': '2238571930-184143.jpg'},
    {'name': '2986447332-371497.jpg', 'path': '2986447332-371497.jpg'},
    {'name': '2864909447-362144.jpg', 'path': '2864909447-362144.jpg'},
    {'name': '2994401319-148290.jpg', 'path': '2994401319-148290.jpg'},
    {'name': '2238480803-19739.jpg', 'path': '2238480803-19739.jpg'},
    {'name': '2238481198-19821.jpg', 'path': '2238481198-19821.jpg'},
    {'name': '2575118671-277663.jpg', 'path': '2575118671-277663.jpg'},
    {'name': '2458347385-199723.jpg', 'path': '2458347385-199723.jpg'},
    {'name': '2898626385-216899.jpg', 'path': '2898626385-216899.jpg'},
    {'name': '2901946436-293242.jpg', 'path': '2901946436-293242.jpg'},
    {'name': '2446761374-124213.jpg', 'path': '2446761374-124213.jpg'},
    {'name': '2446760917-347439.jpg', 'path': '2446760917-347439.jpg'},
    {'name': '2862691449-137104.jpg', 'path': '2862691449-137104.jpg'},
    {'name': '2238471391-240918.jpg', 'path': '2238471391-240918.jpg'},
    {'name': '2986397322-371109.jpg', 'path': '2986397322-371109.jpg'},
    {'name': '2874305405-214397.jpg', 'path': '2874305405-214397.jpg'},
    {'name': '2964210336-293945.jpg', 'path': '2964210336-293945.jpg'},
    {'name': '2898633321-291943.jpg', 'path': '2898633321-291943.jpg'},
    {'name': '2864900357-361688.jpg', 'path': '2864900357-361688.jpg'},
    {'name': '2898633421-291974.jpg', 'path': '2898633421-291974.jpg'},
    {'name': '2460547508-51571.jpg', 'path': '2460547508-51571.jpg'},
    {'name': '2238521193-26285.jpg', 'path': '2238521193-26285.jpg'},
    {'name': '2874307433-66280.jpg', 'path': '2874307433-66280.jpg'},
    {'name': '2446759803-49251.jpg', 'path': '2446759803-49251.jpg'},
    {'name': '2874302418-65978.jpg', 'path': '2874302418-65978.jpg'},
    {'name': '2901939433-69672.jpg', 'path': '2901939433-69672.jpg'},
    {'name': '2238436322-314047.jpg', 'path': '2238436322-314047.jpg'},
    {'name': '2238572663-35822.jpg', 'path': '2238572663-35822.jpg'},
    {'name': '2981231422-369714.jpg', 'path': '2981231422-369714.jpg'},
    {'name': '2512875587-350044.jpg', 'path': '2512875587-350044.jpg'},
    {'name': '2460547732-349518.jpg', 'path': '2460547732-349518.jpg'},
    {'name': '2238481198-19822.jpg', 'path': '2238481198-19822.jpg'},
    {'name': '2901938432-367627.jpg', 'path': '2901938432-367627.jpg'},
    {'name': '2901951392-368654.jpg', 'path': '2901951392-368654.jpg'},
    {'name': '2592379964-131054.jpg', 'path': '2592379964-131054.jpg'},
    {'name': '2512876023-52283.jpg', 'path': '2512876023-52283.jpg'},
    {'name': '2981243412-370222.jpg', 'path': '2981243412-370222.jpg'},
    {'name': '2898618440-216547.jpg', 'path': '2898618440-216547.jpg'},
    {'name': '2868469411-287540.jpg', 'path': '2868469411-287540.jpg'},
    {'name': '2964207374-144577.jpg', 'path': '2964207374-144577.jpg'},
    {'name': '2460547536-274179.jpg', 'path': '2460547536-274179.jpg'},
    {'name': '2964220333-71258.jpg', 'path': '2964220333-71258.jpg'},
    {'name': '2874314526-289684.jpg', 'path': '2874314526-289684.jpg'},
    {'name': '2452380171-273112.jpg', 'path': '2452380171-273112.jpg'},
    {'name': '2989726338-74002.jpg', 'path': '2989726338-74002.jpg'},
    {'name': '2868479517-363220.jpg', 'path': '2868479517-363220.jpg'},
    {'name': '2446759803-49249.jpg', 'path': '2446759803-49249.jpg'},
    {'name': '2460547536-274178.jpg', 'path': '2460547536-274178.jpg'},
    {'name': '2592380255-205553.jpg', 'path': '2592380255-205553.jpg'},
    {'name': '2874299429-139694.jpg', 'path': '2874299429-139694.jpg'},
    {'name': '2874301404-139813.jpg', 'path': '2874301404-139813.jpg'},
    {'name': '2981240424-145794.jpg', 'path': '2981240424-145794.jpg'},
    {'name': '2452380832-348593.jpg', 'path': '2452380832-348593.jpg'},
    {'name': '2238576792-334659.jpg', 'path': '2238576792-334659.jpg'},
    {'name': '2446759803-49250.jpg', 'path': '2446759803-49250.jpg'},
    {'name': '2449442529-124445.jpg', 'path': '2449442529-124445.jpg'},
    {'name': '2898625336-291572.jpg', 'path': '2898625336-291572.jpg'},
    {'name': '2901947448-70314.jpg', 'path': '2901947448-70314.jpg'},
    {'name': '2898624426-291546.jpg', 'path': '2898624426-291546.jpg'},
    {'name': '2901947323-70275.jpg', 'path': '2901947323-70275.jpg'},
    {'name': '2238480648-19714.jpg', 'path': '2238480648-19714.jpg'},
    {'name': '2238480677-317399.jpg', 'path': '2238480677-317399.jpg'},
    {'name': '2898632385-217139.jpg', 'path': '2898632385-217139.jpg'},
    {'name': '2237944827-301472.jpg', 'path': '2237944827-301472.jpg'},
    {'name': '2575120738-55529.jpg', 'path': '2575120738-55529.jpg'},
    {'name': '2883266388-67750.jpg', 'path': '2883266388-67750.jpg'},
    {'name': '2883256307-365057.jpg', 'path': '2883256307-365057.jpg'},
    {'name': '2579432519-130698.jpg', 'path': '2579432519-130698.jpg'},
    {'name': '2898624426-291544.jpg', 'path': '2898624426-291544.jpg'},
    {'name': '2901947423-70311.jpg', 'path': '2901947423-70311.jpg'},
    {'name': '2981232437-369759.jpg', 'path': '2981232437-369759.jpg'},
    {'name': '2981244394-145974.jpg', 'path': '2981244394-145974.jpg'},
    {'name': '2238428357-313623.jpg', 'path': '2238428357-313623.jpg'},
    {'name': '2898635428-69104.jpg', 'path': '2898635428-69104.jpg'},
    {'name': '2883255450-215310.jpg', 'path': '2883255450-215310.jpg'},
    {'name': '2981235446-294900.jpg', 'path': '2981235446-294900.jpg'},
    {'name': '2981240424-145795.jpg', 'path': '2981240424-145795.jpg'},
    {'name': '2964223381-294447.jpg', 'path': '2964223381-294447.jpg'},
    {'name': '2238573546-258454.jpg', 'path': '2238573546-258454.jpg'},
    {'name': '2274829821-263682.jpg', 'path': '2274829821-263682.jpg'},
    {'name': '2901941401-292798.jpg', 'path': '2901941401-292798.jpg'},
    {'name': 'readme.md', 'path': 'readme.md'},
    {'name': '2981244403-72215.jpg', 'path': '2981244403-72215.jpg'},
    {'name': '2868487415-213924.jpg', 'path': '2868487415-213924.jpg'},
    {'name': '2901933382-367209.jpg', 'path': '2901933382-367209.jpg'},
    {'name': '2981229442-369621.jpg', 'path': '2981229442-369621.jpg'},
    {'name': '2981246400-220365.jpg', 'path': '2981246400-220365.jpg'},
    {'name': '2883268412-365899.jpg', 'path': '2883268412-365899.jpg'},
    {'name': '2981241419-145844.jpg', 'path': '2981241419-145844.jpg'},
    {'name': '2579432534-130704.jpg', 'path': '2579432534-130704.jpg'},
    {'name': '2901943411-292945.jpg', 'path': '2901943411-292945.jpg'},
    {'name': '2427874554-121863.jpg', 'path': '2427874554-121863.jpg'},
    {'name': '2901946439-144040.jpg', 'path': '2901946439-144040.jpg'},
    {'name': '2964213381-294060.jpg', 'path': '2964213381-294060.jpg'},
    {'name': '2238584894-113161.jpg', 'path': '2238584894-113161.jpg'},
    {'name': '2898618440-216545.jpg', 'path': '2898618440-216545.jpg'},
    {'name': '2898619327-366362.jpg', 'path': '2898619327-366362.jpg'},
    {'name': '2238481198-19823.jpg', 'path': '2238481198-19823.jpg'},
    {'name': '2238480803-19737.jpg', 'path': '2238480803-19737.jpg'},
    {'name': '2452381505-199546.jpg', 'path': '2452381505-199546.jpg'},
    {'name': '2575120609-129862.jpg', 'path': '2575120609-129862.jpg'},
    {'name': '2238555262-330312.jpg', 'path': '2238555262-330312.jpg'},
    {'name': '2611628310-206388.jpg', 'path': '2611628310-206388.jpg'},
    {'name': '2860302315-210704.jpg', 'path': '2860302315-210704.jpg'},
    {'name': '2864907361-287062.jpg', 'path': '2864907361-287062.jpg'},
    {'name': '2864909447-362146.jpg', 'path': '2864909447-362146.jpg'},
    {'name': '2898618390-216538.jpg', 'path': '2898618390-216538.jpg'},
    {'name': '2238580740-186218.jpg', 'path': '2238580740-186218.jpg'},
    {'name': '2898628438-68785.jpg', 'path': '2898628438-68785.jpg'},
    {'name': '2901943387-368037.jpg', 'path': '2901943387-368037.jpg'},
    {'name': '2964218374-144968.jpg', 'path': '2964218374-144968.jpg'},
    {'name': '2898621427-366486.jpg', 'path': '2898621427-366486.jpg'},
    {'name': '2238531493-28260.jpg', 'path': '2238531493-28260.jpg'},
    {'name': '2446760601-272099.jpg', 'path': '2446760601-272099.jpg'},
    {'name': '2898633421-291973.jpg', 'path': '2898633421-291973.jpg'},
    {'name': '2901939327-367670.jpg', 'path': '2901939327-367670.jpg'},
    {'name': '2452380166-273109.jpg', 'path': '2452380166-273109.jpg'},
    {'name': '2981236443-71859.jpg', 'path': '2981236443-71859.jpg'},
    {'name': '2446758985-197610.jpg', 'path': '2446758985-197610.jpg'},
    {'name': '2986451363-73598.jpg', 'path': '2986451363-73598.jpg'},
    {'name': '2238550816-254000.jpg', 'path': '2238550816-254000.jpg'},
    {'name': '2458348012-349114.jpg', 'path': '2458348012-349114.jpg'},
    {'name': '2575963989-130576.jpg', 'path': '2575963989-130576.jpg'},
    {'name': '2901952513-70703.jpg', 'path': '2901952513-70703.jpg'},
    {'name': '2986408339-146952.jpg', 'path': '2986408339-146952.jpg'},
    {'name': '2898631468-68931.jpg', 'path': '2898631468-68931.jpg'},
    {'name': '2864902304-137862.jpg', 'path': '2864902304-137862.jpg'},
    {'name': '2981246400-220363.jpg', 'path': '2981246400-220363.jpg'},
    {'name': '2898618327-366317.jpg', 'path': '2898618327-366317.jpg'},
    {'name': '2964222378-71332.jpg', 'path': '2964222378-71332.jpg'},
    {'name': '2984628361-295995.jpg', 'path': '2984628361-295995.jpg'},
    {'name': '2964216465-219242.jpg', 'path': '2964216465-219242.jpg'},
    {'name': '2237856148-989.jpg', 'path': '2237856148-989.jpg'},
    {'name': '2238328478-11678.jpg', 'path': '2238328478-11678.jpg'},
    {'name': '2883273443-68193.jpg', 'path': '2883273443-68193.jpg'},
    {'name': '2898634397-367080.jpg', 'path': '2898634397-367080.jpg'},
    {'name': '2981231403-71642.jpg', 'path': '2981231403-71642.jpg'},
    {'name': '2964224310-219528.jpg', 'path': '2964224310-219528.jpg'},
    {'name': '2868474407-362883.jpg', 'path': '2868474407-362883.jpg'},
    {'name': '2238544191-252422.jpg', 'path': '2238544191-252422.jpg'},
    {'name': '2986408373-73286.jpg', 'path': '2986408373-73286.jpg'},
    {'name': '2460547536-274181.jpg', 'path': '2460547536-274181.jpg'},
    {'name': '2883254439-140940.jpg', 'path': '2883254439-140940.jpg'},
    {'name': '2238481630-168218.jpg', 'path': '2238481630-168218.jpg'},
    {'name': '2898632385-217138.jpg', 'path': '2898632385-217138.jpg'},
    {'name': '2901934408-69289.jpg', 'path': '2901934408-69289.jpg'},
    {'name': '2575120738-55528.jpg', 'path': '2575120738-55528.jpg'},
    {'name': '2964218432-369263.jpg', 'path': '2964218432-369263.jpg'},
    {'name': '2238434559-90406.jpg', 'path': '2238434559-90406.jpg'},
    {'name': '2883266367-365742.jpg', 'path': '2883266367-365742.jpg'},
    {'name': '2238480278-19661.jpg', 'path': '2238480278-19661.jpg'},
    {'name': '2964213381-294061.jpg', 'path': '2964213381-294061.jpg'},
    {'name': '2864907432-362042.jpg', 'path': '2864907432-362042.jpg'},
    {'name': '2512875899-126682.jpg', 'path': '2512875899-126682.jpg'},
    {'name': '2864911457-362260.jpg', 'path': '2864911457-362260.jpg'},
    {'name': '2901939379-143480.jpg', 'path': '2901939379-143480.jpg'},
    {'name': '2964218374-144967.jpg', 'path': '2964218374-144967.jpg'},
    {'name': '2901942443-69923.jpg', 'path': '2901942443-69923.jpg'},
    {'name': '2238578544-111698.jpg', 'path': '2238578544-111698.jpg'},
    {'name': '2238563377-332054.jpg', 'path': '2238563377-332054.jpg'},
    {'name': '2898631359-142721.jpg', 'path': '2898631359-142721.jpg'},
    {'name': '2874302418-65979.jpg', 'path': '2874302418-65979.jpg'},
    {'name': '2238577590-185467.jpg', 'path': '2238577590-185467.jpg'},
    {'name': '2238479053-19457.jpg', 'path': '2238479053-19457.jpg'},
    {'name': '2238480434-93829.jpg', 'path': '2238480434-93829.jpg'},
    {'name': '2238516618-25604.jpg', 'path': '2238516618-25604.jpg'},
    {'name': '2984626312-370849.jpg', 'path': '2984626312-370849.jpg'},
    {'name': '2864910426-287204.jpg', 'path': '2864910426-287204.jpg'},
    {'name': '2874303365-214262.jpg', 'path': '2874303365-214262.jpg'},
    {'name': '2868475410-213219.jpg', 'path': '2868475410-213219.jpg'},
    {'name': '2592380177-354628.jpg', 'path': '2592380177-354628.jpg'},
    {'name': '2592380272-354673.jpg', 'path': '2592380272-354673.jpg'},
    {'name': '2874299429-139695.jpg', 'path': '2874299429-139695.jpg'},
    {'name': '2237857458-1325.jpg', 'path': '2237857458-1325.jpg'},
    {'name': '2460547467-349421.jpg', 'path': '2460547467-349421.jpg'},
    {'name': '2592380177-354629.jpg', 'path': '2592380177-354629.jpg'},
    {'name': '2898618444-142232.jpg', 'path': '2898618444-142232.jpg'},
    {'name': '2901939379-143479.jpg', 'path': '2901939379-143479.jpg'},
    {'name': '2864903351-286874.jpg', 'path': '2864903351-286874.jpg'},
    {'name': '2981235446-294901.jpg', 'path': '2981235446-294901.jpg'},
    {'name': '2458347252-348911.jpg', 'path': '2458347252-348911.jpg'},
    {'name': '2860312398-62572.jpg', 'path': '2860312398-62572.jpg'},
    {'name': '2864901420-212147.jpg', 'path': '2864901420-212147.jpg'},
    {'name': '2986447306-296584.jpg', 'path': '2986447306-296584.jpg'},
    {'name': '2898632385-217137.jpg', 'path': '2898632385-217137.jpg'},
    {'name': '2898635427-367120.jpg', 'path': '2898635427-367120.jpg'},
    {'name': '2901942428-69919.jpg', 'path': '2901942428-69919.jpg'},
    {'name': '2901941438-69836.jpg', 'path': '2901941438-69836.jpg'},
    {'name': '2898631394-142727.jpg', 'path': '2898631394-142727.jpg'},
    {'name': '2984615361-295510.jpg', 'path': '2984615361-295510.jpg'},
    {'name': '2238499057-320266.jpg', 'path': '2238499057-320266.jpg'},
    {'name': '2898633480-217190.jpg', 'path': '2898633480-217190.jpg'},
    {'name': '2238481813-19930.jpg', 'path': '2238481813-19930.jpg'},
    {'name': '2864901386-286797.jpg', 'path': '2864901386-286797.jpg'},
    {'name': '2901947423-70310.jpg', 'path': '2901947423-70310.jpg'},
    {'name': '2986451363-73599.jpg', 'path': '2986451363-73599.jpg'},
    {'name': '2460547508-51572.jpg', 'path': '2460547508-51572.jpg'},
    {'name': '2901948383-70363.jpg', 'path': '2901948383-70363.jpg'},
    {'name': '2981241414-145842.jpg', 'path': '2981241414-145842.jpg'},
    {'name': '2984615358-72439.jpg', 'path': '2984615358-72439.jpg'},
    {'name': '2901946465-218350.jpg', 'path': '2901946465-218350.jpg'},
    {'name': '2452380166-273110.jpg', 'path': '2452380166-273110.jpg'},
    {'name': 'demographics1.csv', 'path': 'demographics1.csv'},
    {'name': 'sub_encoding19.csv', 'path': 'sub_encoding19.csv'},
    {'name': 'sub_encoding1.csv', 'path': 'sub_encoding1.csv'},
    {'name': 'sub_test22.csv', 'path': 'sub_test22.csv'},
    {'name': 'flower1_pair.jpg', 'path': 'flower1_pair.jpg'},
    {'name': 'sub_test19.csv', 'path': 'sub_test19.csv'},
    {'name': 'sub_test7.csv', 'path': 'sub_test7.csv'},
    {'name': 'flower6_pair.jpg', 'path': 'flower6_pair.jpg'},
    {'name': 'sub_encoding26.csv', 'path': 'sub_encoding26.csv'},
    {'name': 'sub_encoding15.csv', 'path': 'sub_encoding15.csv'},
    {'name': 'sub_encoding18.csv', 'path': 'sub_encoding18.csv'},
    {'name': 'sub_encoding13.csv', 'path': 'sub_encoding13.csv'},
    {'name': 'sub_test11.csv', 'path': 'sub_test11.csv'},
    {'name': 'sub_encoding24.csv', 'path': 'sub_encoding24.csv'},
    {'name': 'sub_encoding21.csv', 'path': 'sub_encoding21.csv'},
    {'name': 'flower5_pair.jpg', 'path': 'flower5_pair.jpg'},
    {'name': 'sub_test3.csv', 'path': 'sub_test3.csv'},
    {'name': 'sub_test26.csv', 'path': 'sub_test26.csv'},
    {'name': 'sub_test25.csv', 'path': 'sub_test25.csv'},
    {'name': 'flower3_pair.jpg', 'path': 'flower3_pair.jpg'},
    {'name': 'sub_encoding16.csv', 'path': 'sub_encoding16.csv'},
    {'name': 'memory_pilot_most_recent.psyexp', 'path': 'memory_pilot_most_recent.psyexp'},
    {'name': 'sub_test27.csv', 'path': 'sub_test27.csv'},
    {'name': 'sub_encoding5.csv', 'path': 'sub_encoding5.csv'},
    {'name': 'flower6.jpg', 'path': 'flower6.jpg'},
    {'name': 'flower5.jpg', 'path': 'flower5.jpg'},
    {'name': 'sub_test29.csv', 'path': 'sub_test29.csv'},
    {'name': 'sub_encoding27.csv', 'path': 'sub_encoding27.csv'},
    {'name': 'sub_test16.csv', 'path': 'sub_test16.csv'},
    {'name': 'flower1.jpg', 'path': 'flower1.jpg'},
    {'name': 'sub_test9.csv', 'path': 'sub_test9.csv'},
    {'name': 'sub_test2.csv', 'path': 'sub_test2.csv'},
    {'name': 'sub_encoding20.csv', 'path': 'sub_encoding20.csv'},
    {'name': 'flower2.jpg', 'path': 'flower2.jpg'},
    {'name': 'sub_encoding17.csv', 'path': 'sub_encoding17.csv'},
    {'name': 'sub_test1.csv', 'path': 'sub_test1.csv'},
    {'name': 'sub_encoding7.csv', 'path': 'sub_encoding7.csv'},
    {'name': 'flower3.jpg', 'path': 'flower3.jpg'},
    {'name': 'flower2_pair.jpg', 'path': 'flower2_pair.jpg'},
    {'name': 'left.jpg', 'path': 'left.jpg'},
    {'name': 'sub_test6.csv', 'path': 'sub_test6.csv'},
    {'name': 'sub_test23.csv', 'path': 'sub_test23.csv'},
    {'name': 'sub_test24.csv', 'path': 'sub_test24.csv'},
    {'name': 'sub_test20.csv', 'path': 'sub_test20.csv'},
    {'name': 'sub_encoding23.csv', 'path': 'sub_encoding23.csv'},
    {'name': 'sub_encoding12.csv', 'path': 'sub_encoding12.csv'},
    {'name': 'sub_encoding3.csv', 'path': 'sub_encoding3.csv'},
    {'name': 'sub_encoding10.csv', 'path': 'sub_encoding10.csv'},
    {'name': 'demo_encoding.xlsx', 'path': 'demo_encoding.xlsx'},
    {'name': 'sub_encoding28.csv', 'path': 'sub_encoding28.csv'},
    {'name': 'sub_encoding6.csv', 'path': 'sub_encoding6.csv'},
    {'name': 'sub_test13.csv', 'path': 'sub_test13.csv'},
    {'name': 'sub_test14.csv', 'path': 'sub_test14.csv'},
    {'name': 'sub_test17.csv', 'path': 'sub_test17.csv'},
    {'name': 'sub_test4.csv', 'path': 'sub_test4.csv'},
    {'name': 'sub_encoding25.csv', 'path': 'sub_encoding25.csv'},
    {'name': 'sub_encoding9.csv', 'path': 'sub_encoding9.csv'},
    {'name': 'right.jpg', 'path': 'right.jpg'},
    {'name': 'sub_encoding2.csv', 'path': 'sub_encoding2.csv'},
    {'name': 'sub_test0.csv', 'path': 'sub_test0.csv'},
    {'name': 'sub_test21.csv', 'path': 'sub_test21.csv'},
    {'name': 'sub_encoding29.csv', 'path': 'sub_encoding29.csv'},
    {'name': 'sub_test8.csv', 'path': 'sub_test8.csv'},
    {'name': 'sub_encoding0.csv', 'path': 'sub_encoding0.csv'},
    {'name': 'sub_test28.csv', 'path': 'sub_test28.csv'},
    {'name': 'sub_test18.csv', 'path': 'sub_test18.csv'},
    {'name': 'demo_test.xlsx', 'path': 'demo_test.xlsx'},
    {'name': 'sub_test10.csv', 'path': 'sub_test10.csv'},
    {'name': 'sub_encoding14.csv', 'path': 'sub_encoding14.csv'},
    {'name': 'sub_test15.csv', 'path': 'sub_test15.csv'},
    {'name': 'sub_test5.csv', 'path': 'sub_test5.csv'},
    {'name': 'flower4.jpg', 'path': 'flower4.jpg'},
    {'name': 'sub_encoding11.csv', 'path': 'sub_encoding11.csv'},
    {'name': 'sub_encoding8.csv', 'path': 'sub_encoding8.csv'},
    {'name': 'sub_encoding4.csv', 'path': 'sub_encoding4.csv'},
    {'name': 'flower4_pair.jpg', 'path': 'flower4_pair.jpg'},
    {'name': 'sub_encoding22.csv', 'path': 'sub_encoding22.csv'},
    {'name': 'sub_test12.csv', 'path': 'sub_test12.csv'},
    {'name': 'sub_test59.csv', 'path': 'sub_test59.csv'},
    {'name': 'sub_encoding59.csv', 'path': 'sub_encoding59.csv'},
    {'name': 'sub_encoding52.csv', 'path': 'sub_encoding52.csv'},
    {'name': 'sub_encoding38.csv', 'path': 'sub_encoding38.csv'},
    {'name': 'sub_test33.csv', 'path': 'sub_test33.csv'},
    {'name': 'sub_encoding37.csv', 'path': 'sub_encoding37.csv'},
    {'name': 'sub_encoding35.csv', 'path': 'sub_encoding35.csv'},
    {'name': 'sub_test46.csv', 'path': 'sub_test46.csv'},
    {'name': 'sub_test60.csv', 'path': 'sub_test60.csv'},
    {'name': 'sub_encoding51.csv', 'path': 'sub_encoding51.csv'},
    {'name': 'sub_encoding43.csv', 'path': 'sub_encoding43.csv'},
    {'name': 'sub_test44.csv', 'path': 'sub_test44.csv'},
    {'name': 'sub_test45.csv', 'path': 'sub_test45.csv'},
    {'name': 'sub_test53.csv', 'path': 'sub_test53.csv'},
    {'name': 'sub_encoding54.csv', 'path': 'sub_encoding54.csv'},
    {'name': 'sub_test34.csv', 'path': 'sub_test34.csv'},
    {'name': 'sub_test47.csv', 'path': 'sub_test47.csv'},
    {'name': 'sub_encoding57.csv', 'path': 'sub_encoding57.csv'},
    {'name': 'sub_test52.csv', 'path': 'sub_test52.csv'},
    {'name': 'sub_encoding55.csv', 'path': 'sub_encoding55.csv'},
    {'name': 'sub_test41.csv', 'path': 'sub_test41.csv'},
    {'name': 'sub_encoding56.csv', 'path': 'sub_encoding56.csv'},
    {'name': 'sub_test61.csv', 'path': 'sub_test61.csv'},
    {'name': 'sub_encoding39.csv', 'path': 'sub_encoding39.csv'},
    {'name': 'sub_test48.csv', 'path': 'sub_test48.csv'},
    {'name': 'sub_encoding41.csv', 'path': 'sub_encoding41.csv'},
    {'name': 'sub_encoding42.csv', 'path': 'sub_encoding42.csv'},
    {'name': 'sub_encoding33.csv', 'path': 'sub_encoding33.csv'},
    {'name': 'sub_encoding53.csv', 'path': 'sub_encoding53.csv'},
    {'name': 'sub_test54.csv', 'path': 'sub_test54.csv'},
    {'name': 'sub_test31.csv', 'path': 'sub_test31.csv'},
    {'name': 'sub_test35.csv', 'path': 'sub_test35.csv'},
    {'name': 'sub_encoding36.csv', 'path': 'sub_encoding36.csv'},
    {'name': 'sub_test39.csv', 'path': 'sub_test39.csv'},
    {'name': 'sub_test42.csv', 'path': 'sub_test42.csv'},
    {'name': 'sub_test51.csv', 'path': 'sub_test51.csv'},
    {'name': 'sub_test32.csv', 'path': 'sub_test32.csv'},
    {'name': 'sub_encoding34.csv', 'path': 'sub_encoding34.csv'},
    {'name': 'sub_encoding49.csv', 'path': 'sub_encoding49.csv'},
    {'name': 'sub_encoding31.csv', 'path': 'sub_encoding31.csv'},
    {'name': 'sub_encoding46.csv', 'path': 'sub_encoding46.csv'},
    {'name': 'sub_encoding44.csv', 'path': 'sub_encoding44.csv'},
    {'name': 'sub_test43.csv', 'path': 'sub_test43.csv'},
    {'name': 'sub_test56.csv', 'path': 'sub_test56.csv'},
    {'name': 'sub_encoding40.csv', 'path': 'sub_encoding40.csv'},
    {'name': 'sub_test58.csv', 'path': 'sub_test58.csv'},
    {'name': 'sub_encoding48.csv', 'path': 'sub_encoding48.csv'},
    {'name': 'sub_test40.csv', 'path': 'sub_test40.csv'},
    {'name': 'sub_encoding60.csv', 'path': 'sub_encoding60.csv'},
    {'name': 'sub_encoding50.csv', 'path': 'sub_encoding50.csv'},
    {'name': 'sub_test49.csv', 'path': 'sub_test49.csv'},
    {'name': 'sub_encoding45.csv', 'path': 'sub_encoding45.csv'},
    {'name': 'sub_test37.csv', 'path': 'sub_test37.csv'},
    {'name': 'sub_test50.csv', 'path': 'sub_test50.csv'},
    {'name': 'sub_test38.csv', 'path': 'sub_test38.csv'},
    {'name': 'sub_encoding61.csv', 'path': 'sub_encoding61.csv'},
    {'name': 'sub_encoding58.csv', 'path': 'sub_encoding58.csv'},
    {'name': 'sub_test55.csv', 'path': 'sub_test55.csv'},
    {'name': 'sub_test57.csv', 'path': 'sub_test57.csv'},
    {'name': 'sub_encoding47.csv', 'path': 'sub_encoding47.csv'},
    {'name': 'sub_test36.csv', 'path': 'sub_test36.csv'},
    {'name': 'sub_encoding32.csv', 'path': 'sub_encoding32.csv'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["workID"]}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var consentClock;
var consent_form;
var button;
var slide1Clock;
var instruc_slide1;
var space_key_reponse;
var slide2Clock;
var text_6;
var space_key_responce;
var left_arrow;
var right_arrow;
var slide3Clock;
var text_2;
var space_responce;
var demo_trialClock;
var demo_encoding_image;
var demo_15;
var demo_encoding_response;
var fixation_crossClock;
var cross;
var demo_2;
var before_test_instructionsClock;
var text_3;
var key_resp_7;
var demo_testClock;
var demo_test_left;
var demo_test_right;
var demo_test_response;
var demo;
var before_exp_instructionsClock;
var text_4;
var key_resp_8;
var trialClock;
var EncodingTarget;
var test_encoding_response;
var fixation_cross_realClock;
var cross_2;
var endClock;
var text_end;
var key_resp_end;
var test_trialsClock;
var test_image_left;
var test_test_response;
var test_image_right;
var final_screenClock;
var text_end_2;
var key_resp_end_2;
var globalClock;
var routineTimer;

//custom code: 
var existing_participants;
var existing_numbers;
var num_keys_in_dict;
var subject_number;
//end of custom code


async function experimentInit() {
  
 //custom code:   
 // check the fieldnames in the dictionary - does this participant already exist?
      existing_participants = await psychoJS.shelf.getDictionaryFieldNames({key: ["participants_IDs"]})
      console.log('field names',existing_participants)
      existing_numbers = await psychoJS.shelf.getDictionaryFieldValue({key:["participants_IDs"]})
     
      // finiding missing values in array
      existing_numbers = Object.values(existing_numbers)
      console.log('field values',existing_numbers)
      subject_number = parseInt(0)  
      if ((Array.isArray(existing_numbers) && existing_numbers.length)) {
              let max_val  = Math.max.apply(Math,existing_numbers)
      
      console.log('this is the max value of the array',max_val)
      
      let potential_val_range = [...Array(max_val+2).keys()]
      console.log('all value range:', potential_val_range)
      
      for (let val in potential_val_range) {
          val = parseInt(val)
           console.log('current value:',val)
           console.log(existing_numbers.includes(val))
           
          if (!existing_numbers.includes(val)){
             
              subject_number = val
              break; 
          }
          
      }
      }

      
      
      ///

      console.log('this is the subject number',subject_number)
      
      // if not add a new fieldname to this dictionary
      if(!existing_participants.includes(expInfo['workID'])){
          psychoJS.shelf.setDictionaryFieldValue({key: ["participants_IDs"], fieldName: expInfo['workID'], fieldValue :subject_number})
          subject_number=subject_number;
          }else{//increase the number of sessions completed by this participant
              subject_number = await psychoJS.shelf.getDictionaryFieldValue({key: ["participants_IDs"], fieldName:expInfo['workID'], defaultValue:'no sessions detected'})
              subject_number = subject_number;
              console.log('session_number2', subject_number)
              psychoJS.shelf.setDictionaryFieldValue({key: ["participants_IDs"], fieldName: expInfo['workID'], fieldValue :subject_number})
              }
 //cumstom code  
 /*  
 // trying to load resorces 
 console.log('#############################################')
  
  var myList
  var aValue
  myList = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'sub_test' + subject_number.toString() + '.csv',
    seed: undefined, name: 'myList'});

aValue = myList.trialList[0]['image2']  // Get value from row 0
console.log(Object.keys(myList.trialList))
console.log(Object.values(Object.values(myList.trialList)))
console.log(typeof myList.trialList[0]['image1'])
console.log(typeof myList.trialList[0])
console.log(typeof myList.trialList)
 console.log('#############################################')
  //psychoJS.downloadResources([
  
  //{ name: 'trialTypes_B.xls', path: 'http://a.website.org/a.path/trialTypes_B.xls' }
// ]);
 // ending 
   
*/
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consent_form = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_form',
    text: 'By pressing \'space\' I hereby accept to participate in a visual memory experiment.\nI declare I understood the experiment includes the following parts: Experiment description and instructions, practice phase, study phase and test phase.\n\nThe goal of this study is to examine memory encoding processes.\n\nMethods: The experiment will be presented on a computer screen. In the first part you will study a series of neutral images and later will be asked to recognize them. Duration: up to 10 minutes. Time to complete the experiment from approval: 24 hours\n\nParticipants: Healthy population (Amazon Mechanical Turk workers)\nNumber of subjects: 100\nSide effects or discomfort: none\n\nBenefit from the experiment: Participants are not expected to gain personal benefit from this experiment. Through this experiment the research team hopes to uncover how human remember visual stimuli.\nPossible risk factors: none\n\nVoluntary participation: participants are free to quit the experiment at any moment with no penalty, since participation is voluntary.\n\nResearch team is located in Tel Aviv University, and the experimental protocol was approved by its ethics committee.\n\nBy pressing the "I conesnt" button, I hereby declare that I read the above information and agree to participate in this experiment.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.025], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'I consent',
    fillColor: [(- 0.8), 0.8, (- 0.75)],
    borderColor: 'black',
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, (- 0.43)],
    letterHeight: 0.03,
    size: [0.16, 0.07]
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "slide1"
  slide1Clock = new util.Clock();
  instruc_slide1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruc_slide1',
    text: 'Welcome to the experiment!\n\nFocus on the center of the screen\nA series of pictures will appear, each for several seconds\nMemorize the pictures, your memory will be tested later\n\nPlease press the space bar to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space_key_reponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "slide2"
  slide2Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Occasionally, when you see and arrow pointing to the right of left:\n\n\n\n\n\n\n\nPress the corresponding arrow key on your keyboard as fast as you can.\n\nPlease press the space bar to begin',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  space_key_responce = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow', units : undefined, 
    image : 'left.jpg', mask : undefined,
    ori : 0.0, pos : [(- 0.12), 0.05], size : [0.2, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  right_arrow = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow', units : undefined, 
    image : 'right.jpg', mask : undefined,
    ori : 0.0, pos : [0.12, 0.05], size : [0.2, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "slide3"
  slide3Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Now you will proceed to several demo trials\n\nPlease press the space bar to begin\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  space_responce = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demo_trial"
  demo_trialClock = new util.Clock();
  demo_encoding_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'demo_encoding_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : 0.5,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  demo_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'demo_15',
    text: 'DEMO',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  demo_encoding_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation_cross"
  fixation_crossClock = new util.Clock();
  cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  demo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'demo_2',
    text: 'DEMO',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "before_test_instructions"
  before_test_instructionsClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Now your memory for these pictures will be tested:\n\nA pair of pictures will appear, one is new and the other was previously presented\nUse the corresponding arrow key to select the picture that was previously presented\n\nPress the spacebar to begin\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demo_test"
  demo_testClock = new util.Clock();
  demo_test_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'demo_test_left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), 0], size : 0.5,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  demo_test_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'demo_test_right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, 0], size : 0.5,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  demo_test_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'demo',
    text: 'DEMO',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "before_exp_instructions"
  before_exp_instructionsClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Great, you have finished the demo.\nNow the main experiment starts, here are the instructions again:\n\nFocus on the center of the screen\nA series of pictures will appear, each for several seconds\nMemorize the pictures, your memory will be tested later\n\nPlease press the space bar to begin.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  EncodingTarget = new visual.ImageStim({
    win : psychoJS.window,
    name : 'EncodingTarget', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 0.5,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  test_encoding_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation_cross_real"
  fixation_cross_realClock = new util.Clock();
  cross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'Thank you\n\nPlease press the space bar when you are ready for the next part of the experiment\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_trials"
  test_trialsClock = new util.Clock();
  test_image_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_image_left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.3), 0], size : 0.5,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  test_test_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  test_image_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_image_right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.3, 0], size : 0.5,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "final_screen"
  final_screenClock = new util.Clock();
  text_end_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_2',
    text: "Thank you!\n\nYour credit code is:\n\n'tjs'\n\nReport it in the M-turk platform. \n\n\nPlease press the space bar to finish. ",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_end_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consent_form);
    consentComponents.push(button);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_form* updates
    if (t >= 0.0 && consent_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_form.tStart = t;  // (not accounting for frame time here)
      consent_form.frameNStart = frameN;  // exact frame index
      
      consent_form.setAutoDraw(true);
    }

    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }

    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          button.numClicks += 1;
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _space_key_reponse_allKeys;
var slide1Components;
function slide1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'slide1' ---
    t = 0;
    slide1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space_key_reponse.keys = undefined;
    space_key_reponse.rt = undefined;
    _space_key_reponse_allKeys = [];
    // keep track of which components have finished
    slide1Components = [];
    slide1Components.push(instruc_slide1);
    slide1Components.push(space_key_reponse);
    
    for (const thisComponent of slide1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function slide1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'slide1' ---
    // get current time
    t = slide1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruc_slide1* updates
    if (t >= 0.0 && instruc_slide1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruc_slide1.tStart = t;  // (not accounting for frame time here)
      instruc_slide1.frameNStart = frameN;  // exact frame index
      
      instruc_slide1.setAutoDraw(true);
    }

    
    // *space_key_reponse* updates
    if (t >= 0.0 && space_key_reponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_key_reponse.tStart = t;  // (not accounting for frame time here)
      space_key_reponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_key_reponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_key_reponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_key_reponse.clearEvents(); });
    }

    if (space_key_reponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_key_reponse.getKeys({keyList: ['space'], waitRelease: false});
      _space_key_reponse_allKeys = _space_key_reponse_allKeys.concat(theseKeys);
      if (_space_key_reponse_allKeys.length > 0) {
        space_key_reponse.keys = _space_key_reponse_allKeys[_space_key_reponse_allKeys.length - 1].name;  // just the last key pressed
        space_key_reponse.rt = _space_key_reponse_allKeys[_space_key_reponse_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of slide1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function slide1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'slide1' ---
    for (const thisComponent of slide1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    space_key_reponse.stop();
    // the Routine "slide1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _space_key_responce_allKeys;
var slide2Components;
function slide2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'slide2' ---
    t = 0;
    slide2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space_key_responce.keys = undefined;
    space_key_responce.rt = undefined;
    _space_key_responce_allKeys = [];
    // keep track of which components have finished
    slide2Components = [];
    slide2Components.push(text_6);
    slide2Components.push(space_key_responce);
    slide2Components.push(left_arrow);
    slide2Components.push(right_arrow);
    
    for (const thisComponent of slide2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function slide2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'slide2' ---
    // get current time
    t = slide2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *space_key_responce* updates
    if (t >= 0.0 && space_key_responce.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_key_responce.tStart = t;  // (not accounting for frame time here)
      space_key_responce.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_key_responce.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_key_responce.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_key_responce.clearEvents(); });
    }

    if (space_key_responce.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_key_responce.getKeys({keyList: ['space'], waitRelease: false});
      _space_key_responce_allKeys = _space_key_responce_allKeys.concat(theseKeys);
      if (_space_key_responce_allKeys.length > 0) {
        space_key_responce.keys = _space_key_responce_allKeys[_space_key_responce_allKeys.length - 1].name;  // just the last key pressed
        space_key_responce.rt = _space_key_responce_allKeys[_space_key_responce_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow* updates
    if (t >= 0.0 && left_arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow.tStart = t;  // (not accounting for frame time here)
      left_arrow.frameNStart = frameN;  // exact frame index
      
      left_arrow.setAutoDraw(true);
    }

    
    // *right_arrow* updates
    if (t >= 0.0 && right_arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow.tStart = t;  // (not accounting for frame time here)
      right_arrow.frameNStart = frameN;  // exact frame index
      
      right_arrow.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of slide2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function slide2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'slide2' ---
    for (const thisComponent of slide2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(space_key_responce.corr, level);
    }
    psychoJS.experiment.addData('space_key_responce.keys', space_key_responce.keys);
    if (typeof space_key_responce.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space_key_responce.rt', space_key_responce.rt);
        routineTimer.reset();
        }
    
    space_key_responce.stop();
    // the Routine "slide2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _space_responce_allKeys;
var slide3Components;
function slide3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'slide3' ---
    t = 0;
    slide3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space_responce.keys = undefined;
    space_responce.rt = undefined;
    _space_responce_allKeys = [];
    // keep track of which components have finished
    slide3Components = [];
    slide3Components.push(text_2);
    slide3Components.push(space_responce);
    
    for (const thisComponent of slide3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function slide3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'slide3' ---
    // get current time
    t = slide3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *space_responce* updates
    if (t >= 0.0 && space_responce.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_responce.tStart = t;  // (not accounting for frame time here)
      space_responce.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_responce.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_responce.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_responce.clearEvents(); });
    }

    if (space_responce.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_responce.getKeys({keyList: ['space'], waitRelease: false});
      _space_responce_allKeys = _space_responce_allKeys.concat(theseKeys);
      if (_space_responce_allKeys.length > 0) {
        space_responce.keys = _space_responce_allKeys[_space_responce_allKeys.length - 1].name;  // just the last key pressed
        space_responce.rt = _space_responce_allKeys[_space_responce_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of slide3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function slide3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'slide3' ---
    for (const thisComponent of slide3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    space_responce.stop();
    // the Routine "slide3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_encoding_loop;
function demo_encoding_loopLoopBegin(demo_encoding_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    demo_encoding_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'demo_encoding.xlsx',
      seed: undefined, name: 'demo_encoding_loop'
    });
    psychoJS.experiment.addLoop(demo_encoding_loop); // add the loop to the experiment
    currentLoop = demo_encoding_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDemo_encoding_loop of demo_encoding_loop) {
      snapshot = demo_encoding_loop.getSnapshot();
      demo_encoding_loopLoopScheduler.add(importConditions(snapshot));
      demo_encoding_loopLoopScheduler.add(demo_trialRoutineBegin(snapshot));
      demo_encoding_loopLoopScheduler.add(demo_trialRoutineEachFrame());
      demo_encoding_loopLoopScheduler.add(demo_trialRoutineEnd(snapshot));
      demo_encoding_loopLoopScheduler.add(fixation_crossRoutineBegin(snapshot));
      demo_encoding_loopLoopScheduler.add(fixation_crossRoutineEachFrame());
      demo_encoding_loopLoopScheduler.add(fixation_crossRoutineEnd(snapshot));
      demo_encoding_loopLoopScheduler.add(demo_encoding_loopLoopEndIteration(demo_encoding_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function demo_encoding_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(demo_encoding_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function demo_encoding_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var demo_test_loop;
function demo_test_loopLoopBegin(demo_test_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    demo_test_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'demo_test.xlsx',
      seed: undefined, name: 'demo_test_loop'
    });
    psychoJS.experiment.addLoop(demo_test_loop); // add the loop to the experiment
    currentLoop = demo_test_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDemo_test_loop of demo_test_loop) {
      snapshot = demo_test_loop.getSnapshot();
      demo_test_loopLoopScheduler.add(importConditions(snapshot));
      demo_test_loopLoopScheduler.add(demo_testRoutineBegin(snapshot));
      demo_test_loopLoopScheduler.add(demo_testRoutineEachFrame());
      demo_test_loopLoopScheduler.add(demo_testRoutineEnd(snapshot));
      demo_test_loopLoopScheduler.add(demo_test_loopLoopEndIteration(demo_test_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function demo_test_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(demo_test_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function demo_test_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sub_encoding' + subject_number.toString() + '.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(fixation_cross_realRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixation_cross_realRoutineEachFrame());
      trialsLoopScheduler.add(fixation_cross_realRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sub_test' + subject_number.toString() + '.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(test_trialsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(test_trialsRoutineEachFrame());
      trials_2LoopScheduler.add(test_trialsRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _demo_encoding_response_allKeys;
var demo_trialComponents;
function demo_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_trial' ---
    t = 0;
    demo_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    demo_encoding_image.setImage(DemoImage);
    demo_encoding_response.keys = undefined;
    demo_encoding_response.rt = undefined;
    _demo_encoding_response_allKeys = [];
    // keep track of which components have finished
    demo_trialComponents = [];
    demo_trialComponents.push(demo_encoding_image);
    demo_trialComponents.push(demo_15);
    demo_trialComponents.push(demo_encoding_response);
    
    for (const thisComponent of demo_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function demo_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_trial' ---
    // get current time
    t = demo_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demo_encoding_image* updates
    if (t >= 0.0 && demo_encoding_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_encoding_image.tStart = t;  // (not accounting for frame time here)
      demo_encoding_image.frameNStart = frameN;  // exact frame index
      
      demo_encoding_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_encoding_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_encoding_image.setAutoDraw(false);
    }
    
    // *demo_15* updates
    if (t >= 0.0 && demo_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_15.tStart = t;  // (not accounting for frame time here)
      demo_15.frameNStart = frameN;  // exact frame index
      
      demo_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_15.setAutoDraw(false);
    }
    
    // *demo_encoding_response* updates
    if (t >= 0.0 && demo_encoding_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_encoding_response.tStart = t;  // (not accounting for frame time here)
      demo_encoding_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demo_encoding_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demo_encoding_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demo_encoding_response.clearEvents(); });
    }

    frameRemains = 3.0  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((demo_encoding_response.status === PsychoJS.Status.STARTED || demo_encoding_response.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      demo_encoding_response.status = PsychoJS.Status.FINISHED;
  }


    ////////////// custom code start /////////////////
    if (demo_encoding_response.status === PsychoJS.Status.STARTED) 
    {
      let theseKeys = [];
        console.log(DemoImage)
        if ((DemoImage == 'left.jpg')|| (DemoImage == 'right.jpg')) 
        {   console.log('###################')
            console.log('entered demo image')
            theseKeys = demo_encoding_response.getKeys({keyList: ['left', 'right', 'num_4', 'num_6'], waitRelease: false});
            console.log(theseKeys)
            console.log('###################')

        }
            
        _demo_encoding_response_allKeys = _demo_encoding_response_allKeys.concat(theseKeys);
         if (_demo_encoding_response_allKeys.length > 0)
         {
        demo_encoding_response.keys = _demo_encoding_response_allKeys[_demo_encoding_response_allKeys.length - 1].name;  // just the last key pressed
        demo_encoding_response.rt = _demo_encoding_response_allKeys[_demo_encoding_response_allKeys.length - 1].rt;
        // was this correct?
        if (demo_encoding_response.keys == DemoCorrect) {
            demo_encoding_response.corr = 1;
        } else {
            demo_encoding_response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
        console.log(theseKeys);
        }
    }
    
    ////////////// custom code end ///////////////////
    //if (demo_encoding_response.status === PsychoJS.Status.STARTED) {
    //  let theseKeys = demo_encoding_response.getKeys({keyList: ['left', 'right', 'num_4', 'num_6'], waitRelease: false});
    //  _demo_encoding_response_allKeys = _demo_encoding_response_allKeys.concat(theseKeys);
    //  if (_demo_encoding_response_allKeys.length > 0) {
    //    demo_encoding_response.keys = _demo_encoding_response_allKeys[_demo_encoding_response_allKeys.length - 1].name;  // just the last key pressed
    //    demo_encoding_response.rt = _demo_encoding_response_allKeys[_demo_encoding_response_allKeys.length - 1].rt;
    //    // was this correct?
    //    if (demo_encoding_response.keys == DemoCorrect) {
    //        demo_encoding_response.corr = 1;
    //    } else {
    //        demo_encoding_response.corr = 0;
    //    }
    //    // a response ends the routine
    //    continueRoutine = false;
    //  }
    //}
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demo_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_trial' ---
    for (const thisComponent of demo_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (demo_encoding_response.keys === undefined) {
      if (['None','none',undefined].includes(DemoCorrect)) {
         demo_encoding_response.corr = 1;  // correct non-response
      } else {
         demo_encoding_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(demo_encoding_response.corr, level);
    }
    psychoJS.experiment.addData('demo_encoding_response.keys', demo_encoding_response.keys);
    psychoJS.experiment.addData('demo_encoding_response.corr', demo_encoding_response.corr);
    if (typeof demo_encoding_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demo_encoding_response.rt', demo_encoding_response.rt);
        routineTimer.reset();
        }
    
    demo_encoding_response.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixation_crossComponents;
function fixation_crossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation_cross' ---
    t = 0;
    fixation_crossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_crossComponents = [];
    fixation_crossComponents.push(cross);
    fixation_crossComponents.push(demo_2);
    
    for (const thisComponent of fixation_crossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixation_crossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation_cross' ---
    // get current time
    t = fixation_crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross* updates
    if (t >= 0 && cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross.tStart = t;  // (not accounting for frame time here)
      cross.frameNStart = frameN;  // exact frame index
      
      cross.setAutoDraw(true);
    }

    frameRemains = 0.8  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cross.status === PsychoJS.Status.STARTED || cross.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cross.setAutoDraw(false);
    }
    
    // *demo_2* updates
    if (t >= 0.0 && demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_2.tStart = t;  // (not accounting for frame time here)
      demo_2.frameNStart = frameN;  // exact frame index
      
      demo_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_crossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_crossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation_cross' ---
    for (const thisComponent of fixation_crossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var before_test_instructionsComponents;
function before_test_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'before_test_instructions' ---
    t = 0;
    before_test_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    before_test_instructionsComponents = [];
    before_test_instructionsComponents.push(text_3);
    before_test_instructionsComponents.push(key_resp_7);
    
    for (const thisComponent of before_test_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function before_test_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'before_test_instructions' ---
    // get current time
    t = before_test_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of before_test_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function before_test_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'before_test_instructions' ---
    for (const thisComponent of before_test_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_7.stop();
    // the Routine "before_test_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _demo_test_response_allKeys;
var demo_testComponents;
function demo_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_test' ---
    t = 0;
    demo_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    demo_test_left.setImage(DemoImage1);
    demo_test_right.setImage(DemoImage2);
    demo_test_response.keys = undefined;
    demo_test_response.rt = undefined;
    _demo_test_response_allKeys = [];
    // keep track of which components have finished
    demo_testComponents = [];
    demo_testComponents.push(demo_test_left);
    demo_testComponents.push(demo_test_right);
    demo_testComponents.push(demo_test_response);
    demo_testComponents.push(demo);
    
    for (const thisComponent of demo_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demo_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_test' ---
    // get current time
    t = demo_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demo_test_left* updates
    if (t >= 0.0 && demo_test_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_test_left.tStart = t;  // (not accounting for frame time here)
      demo_test_left.frameNStart = frameN;  // exact frame index
      
      demo_test_left.setAutoDraw(true);
    }

    
    // *demo_test_right* updates
    if (t >= 0.0 && demo_test_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_test_right.tStart = t;  // (not accounting for frame time here)
      demo_test_right.frameNStart = frameN;  // exact frame index
      
      demo_test_right.setAutoDraw(true);
    }

    
    // *demo_test_response* updates
    if (t >= 0.0 && demo_test_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_test_response.tStart = t;  // (not accounting for frame time here)
      demo_test_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demo_test_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demo_test_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demo_test_response.clearEvents(); });
    }

    if (demo_test_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = demo_test_response.getKeys({keyList: ['left', 'right', 'num_4', 'num_6'], waitRelease: false});
      _demo_test_response_allKeys = _demo_test_response_allKeys.concat(theseKeys);
      if (_demo_test_response_allKeys.length > 0) {
        demo_test_response.keys = _demo_test_response_allKeys[_demo_test_response_allKeys.length - 1].name;  // just the last key pressed
        demo_test_response.rt = _demo_test_response_allKeys[_demo_test_response_allKeys.length - 1].rt;
        // was this correct?
        if (demo_test_response.keys == DemoCorrectTest) {
            demo_test_response.corr = 1;
        } else {
            demo_test_response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *demo* updates
    if (t >= 0.0 && demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo.tStart = t;  // (not accounting for frame time here)
      demo.frameNStart = frameN;  // exact frame index
      
      demo.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demo_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_test' ---
    for (const thisComponent of demo_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (demo_test_response.keys === undefined) {
      if (['None','none',undefined].includes(DemoCorrectTest)) {
         demo_test_response.corr = 1;  // correct non-response
      } else {
         demo_test_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(demo_test_response.corr, level);
    }
    psychoJS.experiment.addData('demo_test_response.keys', demo_test_response.keys);
    psychoJS.experiment.addData('demo_test_response.corr', demo_test_response.corr);
    if (typeof demo_test_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demo_test_response.rt', demo_test_response.rt);
        routineTimer.reset();
        }
    
    demo_test_response.stop();
    // the Routine "demo_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var before_exp_instructionsComponents;
function before_exp_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'before_exp_instructions' ---
    t = 0;
    before_exp_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    before_exp_instructionsComponents = [];
    before_exp_instructionsComponents.push(text_4);
    before_exp_instructionsComponents.push(key_resp_8);
    
    for (const thisComponent of before_exp_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function before_exp_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'before_exp_instructions' ---
    // get current time
    t = before_exp_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of before_exp_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function before_exp_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'before_exp_instructions' ---
    for (const thisComponent of before_exp_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_8.stop();
    // the Routine "before_exp_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _test_encoding_response_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    EncodingTarget.setImage(target_image);
    test_encoding_response.keys = undefined;
    test_encoding_response.rt = undefined;
    _test_encoding_response_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(EncodingTarget);
    trialComponents.push(test_encoding_response);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *EncodingTarget* updates
    if (t >= 0.0 && EncodingTarget.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EncodingTarget.tStart = t;  // (not accounting for frame time here)
      EncodingTarget.frameNStart = frameN;  // exact frame index
      
      EncodingTarget.setAutoDraw(true);
    }

    frameRemains = 3.0  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((EncodingTarget.status === PsychoJS.Status.STARTED || EncodingTarget.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      EncodingTarget.setAutoDraw(false);
    }
    
    // *test_encoding_response* updates
    if (t >= 0.0 && test_encoding_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_encoding_response.tStart = t;  // (not accounting for frame time here)
      test_encoding_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test_encoding_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test_encoding_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test_encoding_response.clearEvents(); });
    }

    frameRemains = 3.0  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((test_encoding_response.status === PsychoJS.Status.STARTED || test_encoding_response.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      test_encoding_response.status = PsychoJS.Status.FINISHED;
  }



    ////////////// custom code start /////////////////
    if (test_encoding_response.status === PsychoJS.Status.STARTED) 
    {
      let theseKeys = [];
        console.log(target_image)
        if ((target_image == 'left.jpg')|| (target_image == 'right.jpg')) 
        {   console.log('###################')
            console.log('entered demo image')
            theseKeys = test_encoding_response.getKeys({keyList: ['left', 'right', 'num_4', 'num_6'], waitRelease: false});
            console.log(theseKeys)
            console.log('###################')

        }
            
        _test_encoding_response_allKeys = _test_encoding_response_allKeys.concat(theseKeys);
         if (_test_encoding_response_allKeys.length > 0)
         {
        test_encoding_response.keys = _test_encoding_response_allKeys[_test_encoding_response_allKeys.length - 1].name;  // just the last key pressed
        test_encoding_response.rt = _test_encoding_response_allKeys[_test_encoding_response_allKeys.length - 1].rt;
        // was this correct?
        if (test_encoding_response.keys == correct) {
            test_encoding_response.corr = 1;
        } else {
            test_encoding_response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
        console.log(theseKeys);
        }
    }



    //if (test_encoding_response.status === PsychoJS.Status.STARTED) {
    //  let theseKeys = test_encoding_response.getKeys({keyList: ['left', 'right', 'num_4', 'num_6'], waitRelease: false});
     // _test_encoding_response_allKeys = _test_encoding_response_allKeys.concat(theseKeys);
     // if (_test_encoding_response_allKeys.length > 0) {
      //  test_encoding_response.keys = _test_encoding_response_allKeys[_test_encoding_response_allKeys.length - 1].name;  // just the last key pressed
    //    test_encoding_response.rt = _test_encoding_response_allKeys[_test_encoding_response_allKeys.length - 1].rt;
        // was this correct?
     //   if (test_encoding_response.keys == correct) {
       //     test_encoding_response.corr = 1;
    //    } else {
     ///       test_encoding_response.corr = 0;
    //    }
        // a response ends the routine
     //   continueRoutine = false;
     // }
    //}
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (test_encoding_response.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         test_encoding_response.corr = 1;  // correct non-response
      } else {
         test_encoding_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(test_encoding_response.corr, level);
    }
    psychoJS.experiment.addData('test_encoding_response.keys', test_encoding_response.keys);
    psychoJS.experiment.addData('test_encoding_response.corr', test_encoding_response.corr);
    if (typeof test_encoding_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test_encoding_response.rt', test_encoding_response.rt);
        routineTimer.reset();
        }
    
    test_encoding_response.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixation_cross_realComponents;
function fixation_cross_realRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation_cross_real' ---
    t = 0;
    fixation_cross_realClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_cross_realComponents = [];
    fixation_cross_realComponents.push(cross_2);
    
    for (const thisComponent of fixation_cross_realComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixation_cross_realRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation_cross_real' ---
    // get current time
    t = fixation_cross_realClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross_2* updates
    if (t >= 0 && cross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_2.tStart = t;  // (not accounting for frame time here)
      cross_2.frameNStart = frameN;  // exact frame index
      
      cross_2.setAutoDraw(true);
    }

    frameRemains = 0.8  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cross_2.status === PsychoJS.Status.STARTED || cross_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cross_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_cross_realComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_cross_realRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation_cross_real' ---
    for (const thisComponent of fixation_cross_realComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_end_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_end.keys = undefined;
    key_resp_end.rt = undefined;
    _key_resp_end_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_end);
    endComponents.push(key_resp_end);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }

    
    // *key_resp_end* updates
    if (t >= 0.0 && key_resp_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end.tStart = t;  // (not accounting for frame time here)
      key_resp_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.clearEvents(); });
    }

    if (key_resp_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_end_allKeys = _key_resp_end_allKeys.concat(theseKeys);
      if (_key_resp_end_allKeys.length > 0) {
        key_resp_end.keys = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end.rt = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_end.corr, level);
    }
    psychoJS.experiment.addData('key_resp_end.keys', key_resp_end.keys);
    if (typeof key_resp_end.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_end.rt', key_resp_end.rt);
        routineTimer.reset();
        }
    
    key_resp_end.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _test_test_response_allKeys;
var test_trialsComponents;
function test_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_trials' ---
    t = 0;
    test_trialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    test_image_left.setImage(image1);
    test_test_response.keys = undefined;
    test_test_response.rt = undefined;
    _test_test_response_allKeys = [];
    test_image_right.setImage(image2);
    // keep track of which components have finished
    test_trialsComponents = [];
    test_trialsComponents.push(test_image_left);
    test_trialsComponents.push(test_test_response);
    test_trialsComponents.push(test_image_right);
    
    for (const thisComponent of test_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_trials' ---
    // get current time
    t = test_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test_image_left* updates
    if (t >= 0.0 && test_image_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_image_left.tStart = t;  // (not accounting for frame time here)
      test_image_left.frameNStart = frameN;  // exact frame index
      
      test_image_left.setAutoDraw(true);
    }

    
    // *test_test_response* updates
    if (t >= 0.0 && test_test_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_test_response.tStart = t;  // (not accounting for frame time here)
      test_test_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test_test_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test_test_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test_test_response.clearEvents(); });
    }

    if (test_test_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = test_test_response.getKeys({keyList: ['left', 'right', 'num_4', 'num_6'], waitRelease: false});
      _test_test_response_allKeys = _test_test_response_allKeys.concat(theseKeys);
      if (_test_test_response_allKeys.length > 0) {
        test_test_response.keys = _test_test_response_allKeys[_test_test_response_allKeys.length - 1].name;  // just the last key pressed
        test_test_response.rt = _test_test_response_allKeys[_test_test_response_allKeys.length - 1].rt;
        // was this correct?
        if (test_test_response.keys == correct) {
            test_test_response.corr = 1;
        } else {
            test_test_response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *test_image_right* updates
    if (t >= 0.0 && test_image_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_image_right.tStart = t;  // (not accounting for frame time here)
      test_image_right.frameNStart = frameN;  // exact frame index
      
      test_image_right.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_trialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_trials' ---
    for (const thisComponent of test_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (test_test_response.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         test_test_response.corr = 1;  // correct non-response
      } else {
         test_test_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(test_test_response.corr, level);
    }
    psychoJS.experiment.addData('test_test_response.keys', test_test_response.keys);
    psychoJS.experiment.addData('test_test_response.corr', test_test_response.corr);
    if (typeof test_test_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test_test_response.rt', test_test_response.rt);
        routineTimer.reset();
        }
    
    test_test_response.stop();
    // the Routine "test_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_end_2_allKeys;
var final_screenComponents;
function final_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'final_screen' ---
    t = 0;
    final_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_end_2.keys = undefined;
    key_resp_end_2.rt = undefined;
    _key_resp_end_2_allKeys = [];
    // keep track of which components have finished
    final_screenComponents = [];
    final_screenComponents.push(text_end_2);
    final_screenComponents.push(key_resp_end_2);
    
    for (const thisComponent of final_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function final_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'final_screen' ---
    // get current time
    t = final_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_2* updates
    if (t >= 0.0 && text_end_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_2.tStart = t;  // (not accounting for frame time here)
      text_end_2.frameNStart = frameN;  // exact frame index
      
      text_end_2.setAutoDraw(true);
    }

    
    // *key_resp_end_2* updates
    if (t >= 0.0 && key_resp_end_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end_2.tStart = t;  // (not accounting for frame time here)
      key_resp_end_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end_2.clearEvents(); });
    }

    if (key_resp_end_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_end_2_allKeys = _key_resp_end_2_allKeys.concat(theseKeys);
      if (_key_resp_end_2_allKeys.length > 0) {
        key_resp_end_2.keys = _key_resp_end_2_allKeys[_key_resp_end_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end_2.rt = _key_resp_end_2_allKeys[_key_resp_end_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of final_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function final_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'final_screen' ---
    for (const thisComponent of final_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_end_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_end_2.keys', key_resp_end_2.keys);
    if (typeof key_resp_end_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_end_2.rt', key_resp_end_2.rt);
        routineTimer.reset();
        }
    
    key_resp_end_2.stop();
    // the Routine "final_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
