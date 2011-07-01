var WindowWidth = Ti.Platform.displayCaps.platformWidth;
var WindowHeight = Ti.Platform.displayCaps.platformHeight;

var data = [];
var data_description = [];
var data_title = [];
var data_jour = [];
var data_lieu=[];
var data_month_year = [];

var win = Titanium.UI.currentWindow;

win.backgroundImage = '../images/utt_fd_general.jpg';

var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'/xml/evenements/evenements.xml');
if (f.exists())
{
    var xmltext = f.read().text;
    var doc = Ti.XML.parseString(xmltext).documentElement;
    var items = doc.getElementsByTagName("item");
    var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
}

for (var i=0;i<items.length;i++)
{
    var title = items.item(i).getElementsByTagName("title").item(0).text;
    var date = items.item(i).getElementsByTagName("date").item(0).text;
    data_lieu[i] = items.item(i).getElementsByTagName("lieu").item(0).text;
    data_jour[i]=date.split(' ')[0];
    data_month_year[i]=date.split(' ')[1]+' '+date.split(' ')[2];
    data_description[i]=items.item(i).getElementsByTagName("description").item(0).text;


    var post_link = items.item(i).getElementsByTagName("link").item(0).text;


    var row = Ti.UI.createTableViewRow({
        height:'auto',
        width:WindowWidth,
        top:0,
        hasChild: true,
        
        fontSize:'14pt',
        color:'#000'
    });

    var post_title = Ti.UI.createLabel({
        text: title,
        left:10,
        top:12,
        height:35,
        font:{
            fontSize:20
        },
        color:'#000'
    });

    data_title[i] = post_title;

    row.add(post_title);

    row.link = post_link;
    data.push(row);
}

var tv = Titanium.UI.createTableView({
    data:data
});

win.add(tv);

var w;

tv.addEventListener('click',function(e)
{

    var index = e.index;

    w = Titanium.UI.createWindow({
        title:data_title[index].text,
        fullscreen:false,
        backgroundImage:'../images/utt_fd_general.jpg'
    });

    var jour=Ti.UI.createLabel({
        top:0,
        font:{
            fontSize:96,
            fontStyle:'bold'
        },
        height:200,
        color: '#0000ff',
        text:data_jour[index]
    });

    var month_year=Ti.UI.createLabel({
        top:jour.height-50,
        font:{
            fontSize:60,
            fontStyle:'bold'
        },
        color: '#0000ff',
        height:100,
        text:data_month_year[index]
    });
    var location=Ti.UI.createLabel({
        height:20,
        left:5,
        top:jour.height+month_year.height-50,
        color: '#ff0000',
        text:'Lieu:',
        font:{
            fontStyle:'bold'
        }
    });
    var desc=Ti.UI.createLabel({
        height:20,
        left:5,
        top:jour.height+month_year.height+location.height-50,
        color: '#ff0000',
        text:'Description:',
        font:{
            fontStyle:'bold'
        }
    });

    var lieu=Ti.UI.createLabel({
        top:jour.height+month_year.height-50,
        color: '#000000',
        text:data_lieu[index],
        left:50
    });
    var description=Ti.UI.createLabel({
        top:jour.height+month_year.height+location.height-50+desc.height,
        color: '#000000',
        textAlign:'justify',
        left:5,
        text:data_description[index]
    });
    Titanium.UI.currentWindow = w;

    var row2 = Ti.UI.createTableViewRow({
        height:'auto',
        width:WindowWidth,
        top:0,
        hasChild: false
    });

    var data2=[];

    // add the image of the news
    row2.add(jour);

    // add the title of the new
    row2.add(month_year);

    row2.add(location);
    row2.add(lieu);

    // add the description of a specific news
    row2.add(desc);
    row2.add(description);
    data2.push(row2);

    var tv2 = Titanium.UI.createTableView({
        separatorColor:"#000",
        minRowHeight:80,
        data:data2
    
    });

    w.add(tv2);

    w.open();
});

