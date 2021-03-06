//
// create base UI tab and root window
//
var win;

win = Titanium.UI.createWindow({
    backgroundColor:'#fff',
    title:'UVS Branches',
    fullscreen:false
});

// create table view data object
var data = [
{
    title:'ISI', 
    hasChild:true,
    meaning:'Informatique et Systèmes d\'Informations',
    test:'uvsISI_menu.js'
},
{
    title:'SRT', 
    hasChild:true,
    meaning:'Systèmes, Réseaux et Télécommunications',
    test:'uvsSRT_menu.js'
},
{
    title:'SI', 
    hasChild:true,
    meaning:'Systèmes Industriels',
    test:'uvsSI.js'
},
{
    title:'MTE', 
    hasChild:true,
    meaning:'Matériaux: Technologie et Economie',
    test:'uvsMTE.js'
},
{
    title:'SM', 
    hasChild:true,
    meaning:'Systèmes Mécaniques',
    test:'uvsSM.js'
}	
];

var tableview = Titanium.UI.createTableView(
{
    separatorColor:"#000",
    minRowHeight:80    
});

for (var c = 0; c < data.length; c++)
{
	
    row = Ti.UI.createTableViewRow({
        height:'auto', 
        fontSize:'16pt', 
        color:'#000'
    });
    
    var labelTitle = Ti.UI.createLabel({
        text:data[c].title,
        left:10,
        top:10,
        height:'auto',
        font:{
            fontSize:24
        },
        color:'#004276'
    });
    
    var meaningTitle = Ti.UI.createLabel({
        text:data[c].meaning,
        left:10,
        top:35,
        height:'auto',
        font:{
            fontSize:14
        },
        color:'#000'
    });
    
    row.add(labelTitle);
    
    row.add(meaningTitle);
    
    row.pageTitle = data[c].title;
    row.test =  data[c].test;
	
    tableview.appendRow(row);
	
}

var subWin;

// create table view event listener
tableview.addEventListener('click', function(e)
{
    if (e.rowData.test)
    {
        subWin = Titanium.UI.createWindow({
            modal:true,
            url:e.rowData.test
        });
        
        Titanium.UI.currentWindow = subWin;

        subWin.open();
    }
});

// add table view to the window
win.add(tableview);
Titanium.UI.currentWindow = win;
win.open({});