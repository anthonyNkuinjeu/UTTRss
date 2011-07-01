//
// create base UI tab and root window
//
var win;

win = Titanium.UI.createWindow({  
    title:'Guide des formations',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// create table view data object
var data = [
{
    title:'TRONC COMMUN', 
    hasChild:true,
    test:'uvsTC.js'
},
{
    title:'BRANCHES + FILIERES', 
    hasChild:true,
    test:'uvs_branches.js'
},
{
    title:'MASTERS', 
    hasChild:true,
    test:'uvsMasters.js'
},
{
    title:'AUTRES', 
    hasChild:true,
    test:'uvsAutres.js'
}	
];

var tableview = Titanium.UI.createTableView(
{
    separatorColor:"#000"    
});

for (var c = 0; c < data.length; c++)
{
	
    row = Ti.UI.createTableViewRow({
        height:60
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

    subWin = Titanium.UI.createWindow({
        modal:true,
        url:e.rowData.test
    });
    
    subWin.open({
        animated:true
    });    
    

});

// add table view to the window
win.add(tableview);

Titanium.UI.currentWindow = win;

win.open({});