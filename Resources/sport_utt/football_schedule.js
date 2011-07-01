
// get the width and the height of the window
var WindowWidth = Ti.Platform.displayCaps.platformWidth;
var WindowHeight = Ti.Platform.displayCaps.platformHeight;

//table for retrieving the items
var data = [];

var win;

win = Titanium.UI.createWindow({  
    orientationModes:[Titanium.UI.PORTRAIT]
});

var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'xml/sport/football/football_schedule.xml');
if (f.exists())
{
    var xmltext = f.read().text;
    var doc = Ti.XML.parseString(xmltext).documentElement;
    var items = doc.getElementsByTagName("match");
}

for (var i=0;i<items.length;i++)
{
    var dateDuMatch = items.item(i).getElementsByTagName("dateDuMatch").item(0).text;
    dateDuMatch = "Match à jouer le : " + dateDuMatch;
    var equipeHost = items.item(i).getElementsByTagName("equipeHost").item(0).text;
    var equipeVisitor = items.item(i).getElementsByTagName("equipeVisitor").item(0).text;
    var heureMatch = "Heure du Match : " + items.item(i).getElementsByTagName("heureMatch").item(0).text;
    var lieuMatch = "Lieu du Match : " + items.item(i).getElementsByTagName("lieuMatch").item(0).text;

    var equipeHostLabel = Ti.UI.createLabel({
        text: equipeHost,
        textAlign:'left',
        font:{
            fontStyle:'bold',
            fontSize:14
        },
        height:'auto',
        width:'auto',
        top:5,
        color: '#000'
    });
    
    var equipeHostString = new String(equipeHostLabel.text) ;

    if (equipeHostString.indexOf("UTT") != -1)
    {
        equipeHostLabel.color = '#004276';       
    }
    
    var recoitLabel = Ti.UI.createLabel({
        text: 'reçoit',
        textAlign:'left',
        font:{
            fontStyle:'bold',
            fontSize:14
        },
        height:'auto',
        width:'auto',
        top:25,
        color: '#000'
    });
    
    var equipeVisitorLabel = Ti.UI.createLabel({
        text: equipeVisitor,
        textAlign:'left',
        //        left:72,
        font:{
            fontStyle:'bold',
            fontSize:14
        },
        height:'auto',
        width:'auto',
        top:45,
        color: '#000'
    });
    
    var equipeVisitorString = new String(equipeVisitorLabel.text) ;

    if (equipeVisitor.indexOf("UTT") != -1)
    {
        equipeVisitorLabel.color = '#004276';       
    }
    
    var lieuMatchLabel = Ti.UI.createLabel({
        text: lieuMatch,
        textAlign:'left',
//        left:'auto',
        font:{
            fontStyle:'bold',
            fontSize:12
        },
        height:'auto',
        width:'auto',
        bottom:20,
        color: '#004276'
    });    

    var heureMatchLabel = Ti.UI.createLabel({
        text: heureMatch,
        textAlign:'left',
//        left:5,
        font:{
            fontStyle:'bold',
            fontSize:12
        },
        height:'auto',
        width:'auto',
        bottom:5,
        color: '#700000'
    });
    
    var row = Ti.UI.createTableViewRow({
        header:dateDuMatch,
        height:60,
        width:WindowWidth,
        top:0,
        hasChild: false
    });

    row.add(equipeHostLabel);
    row.add(recoitLabel);
    row.add(equipeVisitorLabel);
    row.add(lieuMatchLabel);
    row.add(heureMatchLabel);
    data.push(row);
}

var tv = Titanium.UI.createTableView({
    data:data,
    minRowHeight:110
});

win.add(tv);
Titanium.UI.currentWindow = win;
win.open({});

