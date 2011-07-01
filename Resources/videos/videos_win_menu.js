//
// create base UI tab and root window
//
var win;

win = Titanium.UI.createWindow({  
    title:'Les vidéos de l\'UTT',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// create table view data object
var data = [
{
    title:'Conférences à l\'UTT', 
    summary:'', 
    hasDetail:true,
    hasChild:true,
    test:''
},
{
    title:'L\'UTT sur Canal32', 
    summary:'', 
    hasDetail:true,
    hasChild:true,
    test:'videos_win.js'
},
{
    title:'Les évenements en vidéos', 
    summary:'', 
    hasDetail:true,
    hasChild:true,
    test:''
},
{
    title:'Les assos en vidéos', 
    summary:'', 
    hasDetail:true,
    hasChild:true,
    test:'assos_video_win_menu.js'
}	
];

var tableview = Titanium.UI.createTableView(
{
    separatorColor:"#000"
});

for (var c = 0; c < data.length; c++)
{
	
    row = Ti.UI.createTableViewRow({
        height:60, 
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
    row.hasDetail =  data[c].hasDetail;
	
    tableview.appendRow(row);
	
}

var subWin;

// create table view event listener
tableview.addEventListener('click', function(e)
{
    subWin = Titanium.UI.createWindow({
        fullscreen:false,
        url:e.rowData.test,
        title:e.rowData.pageTitle,
        backgroundColor:'#fff'
    });
        
    Titanium.UI.currentWindow = subWin;

    subWin.open({animated:true});

});

// add table view to the window
win.add(tableview);
Titanium.UI.currentWindow = win;
win.open({});