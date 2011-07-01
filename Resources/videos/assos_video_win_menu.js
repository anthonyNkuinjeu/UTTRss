
// create table view data object
var data = [
{
    title:'AirCampus', 
    hasDetail:true, 
    test:''
},
{
    title:'Argentique club photo', 
    hasDetail:true,
    test:''
},
{
    title:'Asutt', 
    hasDetail:true,
    test:''
},
{
    title:'Asanutt', 
    hasDetail:true,  
    test:''
},
{
    title:'Aspimoto', 
    hasDetail:true,  
    test:''
},	
{
    title:'Atecap', 
    hasDetail:true,  
    test:''
},	
{
    title:'BDE UTT', 
    hasDetail:true,  
    test:''
},	
{
    title:'Club Bières', 
    hasDetail:true,  
    test:''
},	
{
    title:'Club Solex', 
    hasDetail:true,  
    test:''
},	
{
    title:'Cocot\'M1nUTT', 
    hasDetail:true,  
    test:''
},	
{
    title:'Comics Street', 
    hasDetail:true,  
    test:''
},	
{
    title:'Eco-campus 3', 
    hasDetail:true,  
    test:''
},	
{
    title:'Elektro', 
    hasDetail:true,  
    test:''
},	
{
    title:'Foyer', 
    hasDetail:true,  
    test:''
},	
{
    title:'Gala UTT', 
    hasDetail:true,  
    test:'asso_gala_utt_video.js'
},	
{
    title:'Interlink', 
    hasDetail:true,  
    test:''
},	
{
    title:'La roue verte', 
    hasDetail:true,  
    test:''
},	
{
    title:'Media UTT', 
    hasDetail:true,  
    test:'media_utt_video.js'
},	
{
    title:'secUTT', 
    hasDetail:true,  
    test:''
},	
{
    title:'UNG', 
    hasDetail:true,  
    test:''
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
Titanium.UI.currentWindow.add(tableview);