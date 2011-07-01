
// TabGroup
var tabGroup = Titanium.UI.createTabGroup(
{});

var win1 = Titanium.UI.createWindow({
    url:'localisation_bus.js',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({
    title:'En Bus',
    icon:'../images/bus_icon.png',
    window:win1
});

var win2 = Titanium.UI.createWindow({
    url:'localisation_taxi.js',
    backgroundColor:'#fff'
});

var tab2 = Titanium.UI.createTab({
    title:'En Taxi',
    icon:'../images/taxi_icon.png',
    window:win2
});

// Tab3 : CS Printemps
var win3 = Titanium.UI.createWindow({
    url:'localisation_map.js',
    backgroundColor:'#fff'
});

var tab3 = Titanium.UI.createTab({
    title:'Se Répérer',
    icon:'../images/se_reperer_icon.png',
    window:win3
});

// Add all tabs to tabGroup
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);


tabGroup.open({
    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});


