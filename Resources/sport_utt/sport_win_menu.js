
//
// create base UI tab and root window
//
var win;

win = Titanium.UI.createWindow({  
    title:'Evénements Sportifs',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// create table view data object
var data = [
{
    title:'Football', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/football_icon.png'
},
{
    title:'Basket ball', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/basket_icon.png'
},
{
    title:'Volley ball', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/volley_icon.png'
},
{
    title:'Hand ball', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/hand_ball_icon.PNG'
},
{
    title:'Boxe', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/boxe_icon.PNG'
    
},	
{
    title:'Tennis', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/tennis_icon.PNG'
},
{
    title:'Cyclisme', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/cyclisme_icon.PNG'
},
{
    title:'Aviron', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/aviron_icon.PNG'
},
{
    title:'Escalade', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/escalade_icon.PNG'
},
{
    title:'Musculation', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/muscu_icon.PNG'
},
{
    title:'Triathlon', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/triathlon_icon.PNG'    
},
{
    title:'Ultimate', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/ultimate_icon.PNG'    
},
{
    title:'Gymnastic', 
    hasChild:true,
    test:'football_win.js',
    icon:'../images/gym_icon.PNG'
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
    
    var labelImg = Ti.UI.createImageView({
        image:data[c].icon,
        top:10,
        left:10,
        height:38,
        width:38
    });
    
    row.add(labelImg);

    var labelTitle = Ti.UI.createLabel({
        text:data[c].title,
        left:70,
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
            url:e.rowData.test,
            modal:true
        });
        
        Titanium.UI.currentWindow = subWin;

        subWin.open({animated:true});

});

// add table view to the window
win.add(tableview);
Titanium.UI.currentWindow = win;
win.open({});