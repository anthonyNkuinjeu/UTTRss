// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


var main = Ti.UI.createWindow({
    backgroundColor:'#fff',
    title:'trombi',
    url:'trombi.js',
    backgroundImage:'../images/utt_fd_general.jpg'
});



var favoris=Ti.UI.createWindow({
    backgroundColor:'#fff',
    title:'historique',
    url:'favoris.js',
    backgroundImage:'../images/utt_fd_general.jpg'
});

// craete main tab
var tab = Ti.UI.createTab({
    icon:'../images/rechercher_trombi_icon.png',
    title:'Recherche',
    window:main
});



var tab3 = Ti.UI.createTab({
    icon:'../images/favoris_trombi_icon.png',
    title:'Favoris',
    window:favoris
});

// add the tab to the tab group
tabGroup.addTab(tab);
//tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();