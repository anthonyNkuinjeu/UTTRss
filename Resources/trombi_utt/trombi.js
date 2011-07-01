var currentWin = Ti.UI.currentWindow;
Ti.App.nameToSearch="";

var label = Titanium.UI.createLabel({
    text:'Rechercher',
    color:'#000000',
    top:'0',
    heigh:50
})
var search = Titanium.UI.createSearchBar({
	barColor:'#000',
	showCancel:true,
	height:43,
	top:50,
	zIndex:2,
	visible:true,
        animate:true
});

search.addEventListener('return', function(e){
        Ti.App.nameToSearch=search.value;
       // Ti.App.historique_trombi[i]=search.value;
        //i++;
        Titanium.API.info("vous avez entré "+Ti.App.nameToSearch);

        var resultsWin = Ti.UI.createWindow({
                url:'results.js',
                backgroundColor:'#fff',
                title: 'Résultats'
        });
        Ti.UI.currentTab.open(resultsWin);
});
currentWin.add(label);
currentWin.add(search);

var trombi_label = Titanium.UI.createLabel({
    text:'Cet annuaire regroupe l\'ensemble des professeurs de l\'UTT. Certains professeurs ont fourni leur numéro de téléphone, d\'autres pas.\nVous pourrez les contacter  dans le cas où ils ont donné leur numéro de téléphone.',
    color:'#000000',
    textAlign:'justify',
    left:10,
    top:180,
    heigh:'auto'
})

currentWin.add(trombi_label);