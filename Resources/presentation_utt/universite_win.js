
var win;

win = Titanium.UI.createWindow({  
    backgroundImage:'../images/presentation_utt_fd.jpg',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// Width of the window
var WindowWidth = Ti.Platform.displayCaps.platformWidth;

// create table view data object
var data = [
{
    title:'Présentation de l\'UTT', 
    hasChild:true,
    subTitle:'L’Université de Technologie de Troyes (UTT) forme des ingénieurs et propose un Master "Sciences, Technologies et Santé" et des diplômes de 3e cycle. L’UTT, établissement public appartenant au réseau des universités de technologie avec l\'UTC et l\'UTBM, se distingue par une pédagogie transversale et innovante : contacts approfondis avec l’entreprise, séjours à l’étranger et culture générale.'
},
{
    title:'Trois missions', 
    hasChild:true,
    subTitle:'La recherche, la formation et le transfert de technologie sont les trois missions de l’UTT. Etablissement public créé à Troyes en 1994, l’UTT est aujourd’hui parmi les 10 écoles d’ingénieurs les plus importantes en France. Elle forme 2500 étudiants chaque année, de post-bac à bac+5 et bac+8. Dans le classement reconnu des écoles d\'ingénieurs par le magazine L\'Etudiant, elle se situe au 6ème rang parmi 65 établissements, en 2011.'
},
{
    title:'Formation sur mesure', 
    hasChild:true,
    subTitle:'Le parcours d’ingénieur en 5 ans, habilité par la CTI, est individualisé dès la première année et permet à chaque étudiant d’adapter sa formation à son projet professionnel. L’UTT propose cinq diplômes d’ingénieur, un Master avec neuf spécialités et le doctorat, dans cinq spécialités, ainsi que des parcours en alternance (Master, licence professionnelle, 5ème année du cursus ingénieur).'
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
    moving:true,
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
        color:'#336699'
    });
    
    var subTitle = Ti.UI.createLabel({
        text:data[c].subTitle,
        textAlign:'justify',
        left:25,
        top:30,
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