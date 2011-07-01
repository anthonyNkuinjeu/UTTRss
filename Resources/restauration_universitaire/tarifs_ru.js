var WindowWidth = Ti.Platform.displayCaps.platformWidth;
var WindowHeight = Ti.Platform.displayCaps.platformHeight;

var data = [];
var data_description = [];
var data_title = [];


var win = Titanium.UI.currentWindow;

//alert('plat du jour');

var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'/xml/restauration/tarifs_ru.xml');
if (f.exists())
{
    var xmltext = f.read().text;
    var doc = Ti.XML.parseString(xmltext).documentElement;
    var items = doc.getElementsByTagName("item"); // get "item" tags
    var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;

    //alert(items.length);
}
/*************REGARDE LE IF JUSTE AVANT******************/

for (var i=0;i<items.length;i++)
{
    var categorie = items.item(i).getElementsByTagName("title").item(0).text;

    // only to get a short version of the title. Here it is just an initialization
   

    //in case the title is too long, we have to short it up.
   /* if(this_post_title.length > 50)
    {
        this_post_title_short = this_post_title.substring(0,50);
        this_post_title_short = this_post_title_short + "...";
    }*/

    var post_link = items.item(i).getElementsByTagName("link").item(0).text;
    var tarif = items.item(i).getElementsByTagName("tarif").item(0).text;
    

    // get only the date but not the hour of the post
    

    //get some part of the description message. Just to show a preview of the new
    

    var row = Ti.UI.createTableViewRow({
        height:'auto',
        width:WindowWidth,
        top:0,
        hasChild: false
    });

    var post_categorie = Ti.UI.createLabel({
        text: categorie + ": "+ tarif,
        //textAlign:'left',
        left:15,
        font:{
            //fontStyle:'bold',
            fontSize:14
        },
        height:'auto',
        width:'auto',
        //top:5,
        color: '#000000'
    });

    data_title[i] = post_categorie;


    
    
    row.add(post_categorie);
  //  row.add(date_publication_title);
    //row.add(description_preview_row);
    row.link = post_link;
    data.push(row);
}

var tv = Titanium.UI.createTableView({
    data:data
    //minRowHeight:120
});

win.add(tv);

/*var w;

tv.addEventListener('click',function(e)
{

    var index = e.index;

    w = Titanium.UI.createWindow({
        title:data_title[index],
        backgroundColor:'#fff',
        fullscreen:false
    });

    Titanium.UI.currentWindow = w;

    // add the image of the news
    w.add(data_image_description[index]);

    // add the title of the new
    w.add(data_image_news_title[index]);

    // add the description of a specific news
    w.add(data_description[index]);

    w.open();
});*/


/*tv.addEventListener('click',function(e)
{

    var index = e.index;

    var w = Titanium.UI.createWindow({
        title:data_title[index],
        backgroundColor:'#fff'
    });

    // add the image of the news
    w.add(data_image_description[index]);

    // add the title of the new
    w.add(data_image_news_title[index]);

    // add the description of a specific news
    w.add(data_description[index]);

    //    var tabGroup2 = Titanium.UI.createTabGroup();
    //
    //    var tab_desc = Titanium.UI.createTab({
    //        title:data_title[index],
    //        backgroundColor:'#ccc',
    //        size:20,
    //        window:w
    //    });
    //
    //    tabGroup2.addTab(tab_desc);
    //    tabGroup2.open();

    w.open();
});*/