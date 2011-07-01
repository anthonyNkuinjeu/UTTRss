// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

// get the width and the height of the window
var WindowWidth = Ti.Platform.displayCaps.platformWidth;

var db = Ti.Database.install('../UTTRssDB.sqlite','guide');

var uv_choosed = Ti.UI.currentWindow.uv_choosed;

var rows = db.execute('SELECT * FROM descriptionUVs WHERE code = "' + uv_choosed + '"');

var data = [
{title:'' + rows.fieldByName('titre') + '', header:'Titre'},
{title:'' + rows.fieldByName('objectif') + '', header:'Objectif de l\'UV'},
{title:'' + rows.fieldByName('programme') + '', header:'Programme de l\'UV'},
{title:'' + rows.fieldByName('cours') + '', header:'Cours'},
{title:'' + rows.fieldByName('td') + '', header:'TDs'},
{title:'' + rows.fieldByName('tp') + '', header:'TPs'},
{title:'' + rows.fieldByName('antecedant') + '', header:'Antécédant de l\'UV'}
];

var tableview = Ti.UI.createTableView({
	separatorColor:"#000",
        height:'auto'
});

for (var c = 0; c < data.length; c++)
{
	
    row = Ti.UI.createTableViewRow({
        header:data[c].header,
        height:'auto', 
        color:'#000'
    });
    
    var labelTitle = Ti.UI.createLabel({
        text:data[c].title,
        left:10,
        top:5,
        height:'auto',
        width:WindowWidth-50,
        color:'#000'
    });
    
    row.add(labelTitle);    
    tableview.appendRow(row);
	
}

currentWin.add(tableview);


