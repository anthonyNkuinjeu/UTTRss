var WindowWidth = Ti.Platform.displayCaps.platformWidth;
var WindowHeight = Ti.Platform.displayCaps.platformHeight;

var data = [];
var data_description = [];
var data_title = [];
var data_image_description = [];
var data_image_news_title = [];

var win = Titanium.UI.currentWindow;

//alert('plat du jour');

var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'/xml/restauration/grillades_ru.xml');
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
    var this_post_title = items.item(i).getElementsByTagName("title").item(0).text;

    // only to get a short version of the title. Here it is just an initialization
    var this_post_title_short = items.item(i).getElementsByTagName("title").item(0).text;

    //in case the title is too long, we have to short it up.
   /* if(this_post_title.length > 50)
    {
        this_post_title_short = this_post_title.substring(0,50);
        this_post_title_short = this_post_title_short + "...";
    }*/

    var post_link = items.item(i).getElementsByTagName("link").item(0).text;
    var description_text = items.item(i).getElementsByTagName("description").item(0).text;
    var date_publication = "Posted on: "+ items.item(i).getElementsByTagName("pubDate").item(0).text;

    // get only the date but not the hour of the post
    date_publication = date_publication.substring(0,28);

    //get some part of the description message. Just to show a preview of the new
    var description_preview = description_text.substring(0,50);
    description_preview = description_preview+"...";

    var row = Ti.UI.createTableViewRow({
        height:'auto',
        width:WindowWidth,
        top:0,
        hasChild: true
    });

    var post_title = Ti.UI.createLabel({
        text: this_post_title_short,
        textAlign:'left',
        left:72,
        font:{
            fontStyle:'bold',
            fontSize:14
        },
        height:'auto',
        width:'auto',
        top:5,
        color: '#004276'
    });

    data_title[i] = this_post_title;

    var image_news_title = Ti.UI.createLabel({
        text: this_post_title,
        textAlign:'center',
        left:(WindowWidth/2)-125,
        top:250,
        font:{
            fontStyle:'bold',
            fontSize:16
        },
        height:'auto',
        width:250,
        color: '#004276'
    });

    data_image_news_title[i] = image_news_title;

    var description_preview_row = Ti.UI.createLabel({
        text: description_text,
        textAlign:'left',
        left:72,
        top:30,
        font:{
            fontSize:12
        },
        height:'auto',
        width:'auto',
        color: 'black'
    });


    var description_title = Ti.UI.createLabel({
        text: description_text,
        textAlign:'left',
        left:5,
        top:300,
        height:'auto',
        width:'auto',
        color: 'black'
    });

    data_description[i] = description_title;

    var date_publication_title = Ti.UI.createLabel({
        text: date_publication,
        textAlign:'left',
        left:72,
        font:{
            fontSize:10,
            fontStyle:'bold'
        },
        height:'auto',
        width:'auto',
        //top:20,
        color: '#700000'
    });

    //data_pub_date[i] = date_publication_title;

    var thumbnails = items.item(i).getElementsByTagName("media:thumbnail");
    if (thumbnails && thumbnails.length > 0)
    {
        var media = thumbnails.item(0).getAttribute("url");

        var img;

        if (Titanium.Platform.name == 'android')
        {
            // iphone moved to a single image property - android needs to do the same
            img = Ti.UI.createImageView({
                url:media,
                left:5,
                height:60,
                width:60,
                borderColor:'#000',
                borderWidth:'2',
                borderRadius:'5'
            });

            // iphone moved to a single image property - android needs to do the same
            img_description = Ti.UI.createImageView({
                url:media,
                left:60,
                top:10,
                height:230,
                width:200,
                borderColor:'#000',
                borderWidth:'2',
                borderRadius:'5'
            });


        }
        else
        {
            img = Ti.UI.createImageView({
                image:media,
                left:5,
                height:60,
                width:60
            });

        }
        row.add(img);
        data_image_description[i] = img_description;
    }
    row.add(post_title);
  //  row.add(date_publication_title);
    row.add(description_preview_row);
    row.link = post_link;
    data.push(row);
}

var tv = Titanium.UI.createTableView({
    data:data,
    minRowHeight:120
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