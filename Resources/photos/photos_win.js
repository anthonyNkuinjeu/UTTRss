//
// create base UI tab and root window
//
var win;

win = Titanium.UI.createWindow({  
    title:'Photothèque',
    fullscreen:false,
    backgroundColor:'#fff',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// create table view data object
var data = [
{
    title:'Photos de l\'UTT', 
    hasDetail:true, 
    test:'utt_pics.js'
},
{
    title:'La Halle Sportive de l\'UTT', 
    hasDetail:true,
    test:'utt_pics.js'
},
{
    title:'La bibliothèque de l\'UTT', 
    hasDetail:true,
    test:'tabs.js'
},
{
    title:'Les Evénements en photos', 
    hasDetail:true,  
    test:'tabs.js'
},
{
    title:'Le sport en photos', 
    hasDetail:true,  
    test:'inc/youtube.js'
},	
{
    title:'Les assos en photos', 
    hasDetail:true,  
    test:'assos_win_menu.js'
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
    row.pageTitle = data[c].title;
    row.hasDetail =  data[c].hasDetail;

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
    if (e.rowData.test)
    {
        subWin = Titanium.UI.createWindow({
             modal:true,
             title:e.rowData.pageTitle,
             fullscreen:false,
             url:e.rowData.test             
        });

        subWin.open();
    }
});

// add table view to the window
win.add(tableview);
Titanium.UI.currentWindow = win;
win.open({});