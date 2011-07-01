
// create tab group
var tabGroup = Titanium.UI.createTabGroup({
    id:'tabGroup1'
});

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    className:'win1',
    backgroundColor:'#fff'    
});

var tab1 = Titanium.UI.createTab({
    id:'tab1',
    title:'Actu',
    icon:'../images/rss.png',
    window:win1
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({
    url:'football_schedule.js',
    backgroundColor:'#fff',
    titleid:'football_schedule_win_title'
});
var tab2 = Titanium.UI.createTab({
    icon:'../images/sport_schedule.png',
    title:'À venir',
    window:win2
});

//
// create phone tab and root window
//
var win3 = Titanium.UI.createWindow({
    url:'football_score.js',
    backgroundColor:'#fff',
    titleid:'football_score_win_title'
});
var tab3 = Titanium.UI.createTab({
    icon:'../images/score.png',
    title:'Résultats',
    window:win3
});

// get the width and the height of the window
var WindowWidth = Ti.Platform.displayCaps.platformWidth;

//table for retrieving the items
var data = [];
var data_description = [];
var data_title = [];
var data_image_description = [];
var data_image_news_title = [];

//
// create base UI tab and root window
//

var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'xml/sport/football/football_news.xml');
if (f.exists())
{
    var xmltext = f.read().text;
    var doc = Ti.XML.parseString(xmltext).documentElement;
    var items = doc.getElementsByTagName("item");
    var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
}

for (var i=0;i<items.length;i++)
{
    var this_post_title = items.item(i).getElementsByTagName("title").item(0).text;

    // only to get a short version of the title. Here it is just an initialization
    var this_post_title_short = items.item(i).getElementsByTagName("title").item(0).text;

    //in case the title is too long, we have to short it up.
    if(this_post_title.length > 50)
    {
        this_post_title_short = this_post_title.substring(0,50);
        this_post_title_short = this_post_title_short + "...";
    }

    var post_link = items.item(i).getElementsByTagName("link").item(0).text;
    var description_text = items.item(i).getElementsByTagName("description").item(0).text;
    var date_publication = "Posted on: "+ items.item(i).getElementsByTagName("pubDate").item(0).text;

    // get only the date but not the hour of the post
    date_publication = date_publication.substring(0,28);

    //get some part of the description message. Just to show a preview of the new
    var description_preview = description_text.substring(0,70);
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
        text: description_preview,
        textAlign:'left',
        left:72,
        top:70,
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

        row.add(img);
        data_image_description[i] = img_description;
    }
    row.add(post_title);
    row.add(date_publication_title);
    row.add(description_preview_row);
    row.link = post_link;
    data.push(row);
}

var tv = Titanium.UI.createTableView({
    data:data,
    minRowHeight:120
});

win1.add(tv);

tv.addEventListener('click',function(e)
{
    
    var index = e.index;

    var w = Titanium.UI.createWindow({
        title:data_title[index],
        backgroundImage:'../images/utt_fd_general.jpg',
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
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

tabGroup.addEventListener('open',function()
{
    // set background color back to white after tab group transition
    Titanium.UI.setBackgroundColor('#fff');
});

tabGroup.setActiveTab(0); 
// open tab group with a transition animation
tabGroup.open({
    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});

