
// Width of the window
var WindowWidth = Ti.Platform.displayCaps.platformWidth;

var win;

win = Titanium.UI.createWindow({  
    backgroundImage:'../images/formation_utt_fd.jpg',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// create table view data object
var data = [
{
    title:'Formation en Informatique et Systèmes d\'information', 
    hasChild:true,
    subTitle:'Cette spécialité forme des ingénieurs sachant concevoir et organiser les flux d\'information au sein d\'une entreprise, implanter, gérer et optimiser les outils technologiques adéquats et mettre en oeuvre les outils de décision stratégique.'
},
{
    title:'Formation en Systèmes Industriels', 
    hasChild:true,
    subTitle:'La spécialité Systèmes Industriels forme en 3 ans des ingénieurs capables de concevoir et de gérer des systèmes de production, en intégrant leurs divers aspects scientifiques, techniques et socio-économiques.'
},
{
    title:'Formation en Systèmes Mécaniques', 
    hasChild:true,
    subTitle:'Cette spécialité forme des ingénieurs capables de concevoir et réaliser des machines, structures, équipements ou tous types de systèmes mécaniques incorporant diverses technologies : mécanique, électronique, informatique, optique…'
},
{
    title:'Formation en Systèmes Réseaux et Télécommunication', 
    hasChild:true,
    subTitle:'Cette spécialité forme des ingénieurs sachant concevoir et organiser les flux d\'information au sein d\'une entreprise, implanter, gérer et optimiser les outils technologiques adéquats et mettre en oeuvre les outils de décision stratégique.'
},
{
    title:'Formation en Matériau Technologie et Economie', 
    hasChild:true,
    subTitle:'Cette spécialité forme des ingénieurs capables de choisir, acheter, vendre et intégrer les matériaux utilisés dans l\'industrie, en intégrant les contraintes reliées aux normes, à la réglementation et au respect de l\'environnement.'
},
{
    title:'\n', 
    hasChild:true,
    subTitle:'\n'
}
];

var tableview = Titanium.UI.createTableView(
{
    top:90,
    rowHeight:'auto',
    touchEnabled:false,
    separatorColor:"#fff" 
});

for (var c = 0; c < data.length; c++)
{
	
    row = Ti.UI.createTableViewRow({
        height:'auto' 
    });
    
    var labelTitle = Ti.UI.createLabel({
        text:data[c].title,
        left:25,
        top:5,
        height:'auto',
        width:WindowWidth-40,
        font:{
            fontSize:18,
            fontStyle:'bold'
        },
        color:'#05A253'
    });
    
    var subTitle = Ti.UI.createLabel({
        text:data[c].subTitle,
        left:25,
        top:55,
        bottom:10,
        height:'auto',
        width:WindowWidth-35,
        font:{
            fontSize:12
        },
        color:'#000'
    });
    
    row.add(labelTitle);
    row.add(subTitle);

    tableview.appendRow(row);
	
}

Titanium.UI.currentWindow = win;

win.add(tableview);

win.open();