
// create tab group
var tabGroup = Titanium.UI.createTabGroup({
    id:'tabGroup1'
});


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    className:'win1',
    url:'pdj_ru.js',
    backgroundColor:'#fff'

//    backgroundImage:'images/fond_ecran.jpg'
});

var tab1 = Titanium.UI.createTab({
    id:'tab1',
    title:'Plat du jour',
   // icon:'../images/rss.png',
    window:win1
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({
    url:'grillades_ru.js',
    backgroundColor:'#fff',
//    backgroundImage:'images/fond_ecran.jpg',
    titleid:'football_schedule_win_title'
});
var tab2 = Titanium.UI.createTab({
    //icon:'../images/sport_schedule.png',
    title:'Grillades',
    titleid:'images/football_schedule_win_title',
    window:win2
});


//
// create phone tab and root window
//
var win3 = Titanium.UI.createWindow({
    url:'pp_ru.js',
    backgroundColor:'#fff',
//    backgroundImage:'images/fond_ecran.jpg',
    titleid:'phone_win_title'
});
var tab3 = Titanium.UI.createTab({
    //icon:'../images/score.png',
    title:'Pâtes & pizzas',
    titleid:'phone_win_title',
    window:win3
});


var win4 = Titanium.UI.createWindow({
   url:'tarifs_ru.js',
   titleid:'tarif',
   backgroundColor:'#fff'
});
var tab4 = Titanium.UI.createTab({
    title:'Tarifs',
    titleid:'tarif',
    window:win4
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);

tabGroup.addEventListener('open',function()
{
    // set background color back to white after tab group transition
    Titanium.UI.setBackgroundColor('#fff');
});

tabGroup.setActiveTab(0);
// open tab group with a transition animation
tabGroup.open({
   
});

