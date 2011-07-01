var WindowWidth = Ti.Platform.displayCaps.platformWidth;
var WindowHeight = Ti.Platform.displayCaps.platformHeight;

var data = [];
var data_adresse = [];
var data_telephone = [];
var data_title = [];


var win = Titanium.UI.currentWindow;
win.title = "Informations pratiques";

var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'/xml/infos_pratiques/infos.xml');
if (f.exists())
{
    var xmltext = f.read().text;
    var doc = Ti.XML.parseString(xmltext).documentElement;
    var items = doc.getElementsByTagName("item"); // get "item" tags
    var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
}

for (var i=0;i<items.length;i++)
{
    var title = items.item(i).getElementsByTagName("title").item(0).text;
    var element = items.item(i).getElementsByTagName("element");

    var name0=element.item(0).getElementsByTagName("name").item(0).text;
    var adresse0=element.item(0).getElementsByTagName("adresse").item(0).text;
    var telephone0=element.item(0).getElementsByTagName("telephone").item(0).text;

     var adresse=Ti.UI.createLabel({
        color:'#ff0000',
        top:45,
        height:20,
        left:5,
        font:{
            fontStyle:'bold',
            fontSize:14
        },
        text:'adresse:'
    });

    var telephone=Ti.UI.createLabel({
        color:'#ff0000',
//        top:adresse.height+adresse.top,
        bottom:10,
        left:5,
        font:{
            fontStyle:'bold',
            fontSize:14
        },
        text:'Téléphone:'
    });

    var name_post0=Ti.UI.createLabel({
        color: '#336699',
        left:5,
        top:0,
        font:{
            fontStyle:'bold',
            fontSize:14
        },
        height:35,
        text:name0
    });
    var adresse_post0=Ti.UI.createLabel({
        color: '#000000',
        top:adresse.top,
        left:100,
        font:{
            //fontStyle:'bold',
            fontSize:14
        },
        text:adresse0
    });
    var telephone_post0=Ti.UI.createLabel({
        color: '#000000',
//        top:telephone.top,
        bottom:10,
        left:100,
        font:{
            //fontStyle:'bold',
            fontSize:14
        },
        text:telephone0
    });

    var row0 = Ti.UI.createTableViewRow({
        height:'auto',
        width:WindowWidth,
        top:0,
        hasChild: false,
        header:title
    });
    row0.add(name_post0);
    row0.add(adresse);
    row0.add(adresse_post0);
    row0.add(telephone);
    row0.add(telephone_post0);
    data.push(row0);
    
    for(var j=1; j<element.length;j++){
        var namex=element.item(j).getElementsByTagName("name").item(0).text;
        var adressex=element.item(j).getElementsByTagName("adresse").item(0).text;
        var telephonex=element.item(j).getElementsByTagName("telephone").item(0).text;

        var name_postx=Ti.UI.createLabel({
        color: '#336699',
        left:5,
        top:0,
        font:{
            fontStyle:'bold',
            fontSize:14
        },
        text:namex
    });
    var adresse_postx=Ti.UI.createLabel({
        color: '#000000',
        top:adresse.top,
        left:100,
        font:{
            //fontStyle:'bold',
            fontSize:14
        },
        text:adressex
    });

    var telephone_postx=Ti.UI.createLabel({
        color: '#000000',
//        top:telephone.top,
        bottom:10,
        left:100,
        font:{
            //fontStyle:'bold',
            fontSize:14
        },
        text:telephonex
    });

        var rowx = Ti.UI.createTableViewRow({
        height:'auto',
        width:WindowWidth,
        top:0,
        hasChild: false

    });
    rowx.add(name_postx);
    rowx.add(adresse);
    rowx.add(adresse_postx);
    rowx.add(telephone);
    rowx.add(telephone_postx);
    data.push(rowx);
    }
    
}

var tv = Titanium.UI.createTableView({
    data:data,
    minRowHeight:120
});

win.add(tv);

