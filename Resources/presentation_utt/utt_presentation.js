
//
// create base UI tab and root window
//
var win;

win = Titanium.UI.createWindow({  
    title:'Présentation de l\'UTT',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// create table view data object
var data = [
{
    title:'L\'Université', 
    hasChild:true,
    test:'universite_win.js'
},
{
    title:'La Formation', 
    hasChild:true,
    test:'formation_utt_win.js'
},
{
    title:'La recherche', 
    hasChild:true,
    test:'recherche_win.js'
},
{
    title:'L\'international', 
    hasChild:true,
    test:'international_win.js'
},
{
    title:'Relations entreprises', 
    hasChild:true,
    test:'relations_entreprises_win.js'
},
{
    title:'Vie du campus', 
    hasChild:true,
    test:'vie_campus_win.js'
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
        fontSize:'14pt', 
        color:'#000'
    });

    var labelTitle = Ti.UI.createLabel({
        text:data[c].title,
        left:10,
        top:12,
        height:35,
        font:{
            fontSize:20
        },
        color:'#000'
    });
    row.add(labelTitle);
    
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
            fullscreen:false,
            url:e.rowData.test,
            title:e.rowData.pageTitle,
            backgroundColor:'#fff'
        });

        subWin.open();
    }
});

// add table view to the window
win.add(tableview);
Titanium.UI.currentWindow = win;
win.open({});

