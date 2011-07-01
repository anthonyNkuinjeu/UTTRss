
// create table view data object
var data = [];

// Width of the window
var WindowWidth = Ti.Platform.displayCaps.platformWidth;

var toolActInd = Titanium.UI.createActivityIndicator();
toolActInd.font = {
    fontFamily:'Helvetica Neue',
    fontSize:15,
    fontWeight:'bold'
};
toolActInd.color = 'white';
toolActInd.message = 'Chargement videos...';
toolActInd.show();

var xhr = Ti.Network.createHTTPClient();

xhr.onload = function()
{
    try
    {
        var doc = this.responseXML.documentElement;
        var items = doc.getElementsByTagName("item");
        var x = 0;
        var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
        for (var c=0;c<items.length;c++)
        {
            var item = items.item(c);
            var thumbnails = item.getElementsByTagName("media:thumbnail");
            if (thumbnails && thumbnails.length > 0)
            {
                var media = thumbnails.item(0).getAttribute("url");
                var title = item.getElementsByTagName("title").item(0).text;
                var summary = item.getElementsByTagName("itunes:summary").item(0).text;
                var views = item.getElementsByTagName("dm:views").item(0).text;
                var date_envoi = item.getElementsByTagName("dm:relativeDate").item(0).text;
                
                //get some part of the description message. Just to show a preview of the new
                summary = summary.substring(0,70);
                summary = summary+"...";
                
                //Add some text for the views
                views = "Nombre de vues: "+views;
                
                var row = Ti.UI.createTableViewRow({
                    height:'auto'
                });
                
                var label = Ti.UI.createLabel({
                    text:title,
                    textAlign:'left',
                    left:72,
                    font:{
                        fontStyle:'bold',
                        fontSize:14
                    },
                    height:'auto',
                    width:WindowWidth-80,
                    top:5,
                    color: '#004276'
                });
                row.add(label);
                
                var views_label = Ti.UI.createLabel({
                    text:views,
                    textAlign:'left',
                    left:72,
                    top:30,
                    font:{
                        fontSize:10
                    },
                    height:'auto',
                    width:'auto',
                    color: 'black'
                });
                row.add(views_label);
                
                var date_envoi_label = Ti.UI.createLabel({
                    text:date_envoi,
                    textAlign:'left',
                    left:72,
                    top:45,
                    font:{
                        fontSize:10
                    },
                    height:'auto',
                    width:'auto',
                    color: '#700000'
                });
                row.add(date_envoi_label);
                
                var summary_label = Ti.UI.createLabel({
                    text:summary,
                    textAlign:'left',
                    left:72,
                    bottom:10,
                    font:{
                        fontSize:12
                    },
                    height:'auto',
                    width:WindowWidth-80,
                    color: 'black'
                });
                row.add(summary_label);
                
                var img;
                if (Titanium.Platform.name == 'android') 
                {
                    // iphone moved to a single image property - android needs to do the same
                    img = Ti.UI.createImageView({
                        url:media,
                        left:5,
                        height:60,
                        width:60
                    });

                }
                row.add(img);
                data[x++] = row;
                row.url = item.getElementsByTagName("link").item(0).text;
            }
        }
                
        var tableview = Titanium.UI.createTableView({
            data:data,  
            backgroundColor :'#fff',
            minRowHeight:100
        });
                
        Titanium.UI.currentWindow.add(tableview);
                
        tableview.addEventListener('click',function(e)
        {
            var w = Ti.UI.createWindow({
                title:doctitle,
                fullscreen:false
            });
            var wb = Ti.UI.createWebView({
                url:e.row.url
            });
            w.add(wb);
            var b = Titanium.UI.createButton({
                title:'Close',
                style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
            });
            w.setLeftNavButton(b);
            b.addEventListener('click',function()
            {
                w.close();
            });
            w.open({
                modal:true
            });
        });
    }
    catch(E)
    {
        alert(E);
    }
    
    toolActInd.hide();
};

xhr.open("GET","http://www.dailymotion.com/rss/user/media_utt/1");

xhr.send();




