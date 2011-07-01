
var tableview;
// create table view data object
var data = [];

var webModal;
var webModalView;
var currentLink;

var DEFAULT_CHANNEL = 'canal32';

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


tableview = Titanium.UI.createTableView({
    data:data,
    // top:20,
    backgroundColor:"#fff",
    separatorColor:"#000"
});

Titanium.UI.currentWindow.add(tableview);

tableview.addEventListener('click',function(e)
{

    playYouTube(e.row.videotitle,e.row.guid);

});


var xhr = Ti.Network.createHTTPClient();


function doYouTubeSearch ()
{
    var searchUrl = "http://gdata.youtube.com/feeds/base/users/canal32/uploads?q=utt%20universite&orderby=published&alt=rss&max-results=25&v=2";
    toolActInd.show();

    xhr = Ti.Network.createHTTPClient();


    xhr.onload = function()
    {
        try
        {
            var doc;

            Titanium.API.debug("got youtube video response");

            if (!this.responseXML)
            {
                Titanium.API.debug("got plaintext");

                doc = Titanium.XML.parseString(this.responseText).documentElement;
            }
            else
            {

                Titanium.API.debug("got XML");
                doc = this.responseXML.documentElement;
            }

            data = [];
            tableview.setData(data);

            var items = doc.getElementsByTagName("item");
            var x = 0;
            var c;

            if (items.length == 0)
            {
                var row = Ti.UI.createTableViewRow({
                    height:80
                });
                row.hasDetail = false;
                row.title = "No matching results";
                row.text = "No matching results";
                data[x++] = row;
            }


            for (c=0;c<items.length;c++)
            {
                var item = items.item(c);

                var title = item.getElementsByTagName("title").item(0).text;

                var summary = "";
                if (item.getElementsByTagName("pubDate"))
                {
                    summary = item.getElementsByTagName("pubDate").item(0).text;
                }

                var link = "";

                if (item.getElementsByTagName("link"))
                {
                    link = item.getElementsByTagName("link").item(0).text;
                }

                var guid = link.substring(link.indexOf("?v=")+3);
                guid = guid.substring(0,guid.indexOf("&"));

                var thumbnail = "http://i.ytimg.com/vi/" + guid + "/2.jpg";

                var row = Ti.UI.createTableViewRow({
                    height:80
                });

                row.url = link;
                row.guid = guid;
                row.videotitle = title;
                row.backgroundColor="#fff";
                row.color ="#fff";


                var labelTitle = Ti.UI.createLabel({
                    text:title,
                    left:85,
                    top:5,
                    height:'auto',
                    width:WindowWidth-100,
                    font:{fontSize:13, fontStyle:'bold'},
                    color:"#004276"
                });
                row.add(labelTitle);

                var labelSummary = Ti.UI.createLabel({
                    text:summary,
                    left:85,
                    top:45,
                    font:{
                        fontSize:11
                    },
                    height:'auto',
                    width:'auto',
                    color:"#700000"
                });
                row.add(labelSummary);

                var img = Ti.UI.createImageView({
                    url:thumbnail,
                    left:0,
                    height:60,
                    width:80
                });
                row.add(img);

                data[x] = row;
                tableview.appendRow(data[x]);

                x++;
            }


        }
        catch(E)
        {
            //	alert(E);
            Titanium.API.debug(E);
            Titanium.UI.createAlertDialog({
                title:'Recherche de vidéo',
                message:'Erreur d\'accès à YouTube.'
            }).show();

        }

        toolActInd.hide();
    };

    xhr.open("GET",searchUrl);
    xhr.send();


    Ti.API.debug("youtube: " + searchUrl);
}

function createWebView ()
{

    webModal = Ti.UI.createWindow({
        });

    webModal.orientationModes = [
    Titanium.UI.PORTRAIT,
    Titanium.UI.LANDSCAPE_LEFT,
    Titanium.UI.LANDSCAPE_RIGHT
    ];


    webModalView = Ti.UI.createWebView();
    webModalView.scalesPageToFit = true;

    webModal.add(webModalView);


    toolActInd = Titanium.UI.createActivityIndicator();
    toolActInd.font = {
        fontFamily:'Helvetica Neue',
        fontSize:15,
        fontWeight:'bold'
    };
    toolActInd.color = 'white';
    toolActInd.message = 'Loading...';

    webModalView.addEventListener('beforeload',function(e)
    {
        Ti.API.debug("webview beforeload: "+e.url);

        toolActInd.show();

    });

    webModalView.addEventListener('load',function(e)
    {
        Ti.API.debug("webview loaded: "+e.url);

        toolActInd.hide();

    });

    return webModalView;
}


function playYouTube (vtitle, vguid)
{
    if (Titanium.Platform.name == 'iPhone OS')
    {
        var ytVideoSrc = "http://www.youtube.com/v/" + vguid;
        var thumbPlayer = '<html><head><style type="text/css"> h1 { font-family:\'Helvetica\'; font-size:30pt;} body { background-color: black;color: white;} </style></head><body style="margin:0"><h1>' + vtitle + '</h1><center><embed id="yt" src="' + ytVideoSrc + '" type="application/x-shockwave-flash" width="100%" height="75%"></embed></center></body></html>';

        showHTMLContent(vtitle,'http://www.youtube.com/watch?v=' + vguid,thumbPlayer);
    }
    else
    {
        Titanium.Platform.openURL('http://www.youtube.com/watch?v=' + vguid);
    }
}

function showYouTubeVideo (wTitle, wYouTube)
{

    var wYouTubeId = wYouTube.substring(wYouTube.indexOf("v=")+2);

    if (wYouTubeId.indexOf("&") != -1)
    {
        wYouTubeId = wYouTubeId.substring(0,wYouTubeId.indexOf("&"));
    }

    Titanium.API.info("loading youtube page: " + wYouTubeId + " / " + wYouTube);

    var youTubePlayer = '<html><body><center><div id="emvideo-youtube-flash-wrapper-1"><object type="application/x-shockwave-flash" height="350" width="425" data="http://www.youtube.com/v/' + wYouTubeId + '&amp;rel=0&amp;fs=1" id="emvideo-youtube-flash-1" allowFullScreen="true"> <param name="movie" value="http://www.youtube.com/v/' + wYouTubeId + '&amp;rel=0&amp;fs=1" />  <param name="allowScriptAcess" value="sameDomain"/>  <param name="quality" value="best"/>  <param name="allowFullScreen" value="true"/>  <param name="bgcolor" value="#FFFFFF"/>  <param name="scale" value="noScale"/> <param name="salign" value="TL"/> <param name="FlashVars" value="playerMode=embedded" /> <param name="wmode" value="transparent" /> <a href="http://www.youtube.com/watch?v=' + wYouTubeId + '">	<img src="http://img.youtube.com/vi/' + wYouTubeId + '/0.jpg" width="480" height="360" alt="[Video title]" />YouTube Video</a></object></div></center></body></html>';

    showHTMLContent(wTitle, '', youTubePlayer);

}

doYouTubeSearch();
