
//
// create base UI tab and root window
//
var win;

win = Titanium.UI.createWindow({  
    title:'Actualités UTT',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// create table view data object
var data = [
{
    title:'Informations UTT', 
    hasChild:true,
    test:'news_win.js'
},
{
    title:'La bibliothèque UTT', 
    hasChild:true,
    test:'news_win.js'
},
{
    title:'Brèves du magazine Ellipse', 
    hasChild:true,
    test:'news_win.js'
},
{
    title:'Informations Recherche', 
    hasChild:true,
    test:'news_win.js'
},
{
    title:'Informations Assos', 
    hasChild:true,
    test:'news_win.js'
}	
];

var tableview = Titanium.UI.createTableView(
{
    //    data:data,
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
            backgroundImage:'../images/utt_fd_general.jpg'
        });

        subWin.open();
    }
});

// add table view to the window
win.add(tableview);
Titanium.UI.currentWindow = win;
win.open({});

