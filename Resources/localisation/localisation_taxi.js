//
// create base UI tab and root window
//
var win = Titanium.UI.currentWindow;
win.backgroundImage = '../images/utt_fd_general.jpg';

// create table view data object
var data = [
{
    title:'Accord Radio Taxis Troyens', 
    adress:'6 avenue du Maréchal Joffre - 10000 Troyes',
    tel:'Tel: 03 25 78 30 30'
},
{
    title:'Allo Taxis Pontois', 
    adress:'2 Bis rue Henry Regnault - 10800 Saint- Julien-les-Villas',
    tel:'Tel: 06 85 77 16 25'
},
{
    title:'Taxi Saint-Luc', 
    adress:'41 rue du 40ème Régiment Artillerie - 10600 La Chapelle-Saint-Luc',
    tel:'Tel: 06 89 58 83 62'
},
{
    title:'Taxis Chapelains', 
    adress:'14 rue René Descartes - 10600 La Chapelle-Saint-Luc',
    tel:'Tel: 03 25 49 87 01'
}	
];

var tableview = Titanium.UI.createTableView(
{
    separatorColor:"#000",
    touchEnabled:false,
    height:'auto'   
});

for (var c = 0; c < data.length; c++)
{
	
    row = Ti.UI.createTableViewRow({
        color:'#000'
    });
    
    var labelTitle = Ti.UI.createLabel({
        text:data[c].title,
        left:10,
        top:10,
        height:'auto',
        font:{
            fontSize:18
        },
        color:'#004276'
    });
    
    var adressTitle = Ti.UI.createLabel({
        text:data[c].adress,
        left:10,
        top:35,
        height:'auto',
        font:{
            fontSize:14
        },
        color:'#000'
    });
    
    var telTitle = Ti.UI.createLabel({
        text:data[c].tel,
        left:10,
        top:80,
        bottom:20,
        height:'auto',
        font:{
            fontSize:14
        },
        color:'red'
    });
    
    row.add(labelTitle);
    
    row.add(adressTitle);
    
    row.add(telTitle);
    
    tableview.appendRow(row);
	
}

// add table view to the window
win.add(tableview);



