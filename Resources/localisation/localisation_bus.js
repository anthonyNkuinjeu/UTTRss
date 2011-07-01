
var WindowWidth = Ti.Platform.displayCaps.platformWidth;

var win = Titanium.UI.currentWindow;
win.backgroundImage = '../images/utt_fd_general.jpg';

// create table view data object
var data = [
{
    title:'Ligne de Bus:', 
    hasChild:true,
    subTitle:'Pour vous rendre à l\'UTT, vous pouvez prendre: \n- Soit la ligne 6 et descendre à l\'arrêt de bus "Technopole".\n- Soit la ligne 11. Elle s\'arrête aussi à "Technolopole".\n- Soit la ligne 8 et vous descendez à l\'arrêt "UTT".\nN\'hésitez pas à utiliser le service de localisation.'
},
{
    title:'Les horaires des bus en temps réel: illico', 
    hasChild:true,
    subTitle:'Avec ce service (gratuit) développé par la TCAT, il est possible de savoir l\'heure exacte de passage d\'un bus de la TCAT à un arrêt donné. Du lieu de travail, du domicile ou dans la rue, le système Illico, mis au point par la TCAT, donnera l\'horaire exact d\'arrivée des deux prochains bus. Cliquez ici pour acceder à ce service.'
}
];

var tableview = Titanium.UI.createTableView(
{
    rowHeight:'auto',
    separatorColor:"#000" 
});

for (var c = 0; c < data.length; c++)
{
	
    row = Ti.UI.createTableViewRow({
        height:'auto'
    });
    
    var labelTitle = Ti.UI.createLabel({
        text:data[c].title,
        left:10,
        top:5,
        height:'auto',
        width:WindowWidth-40,
        font:{
            fontSize:18,
            fontStyle:'bold'
        },
        color:'#336699'
    });
    
    var subTitle = Ti.UI.createLabel({
        text:data[c].subTitle,
        left:10,
        textAlign:'justify',
        top:55,
        bottom:15,
        height:'auto',
        width:WindowWidth-30,
        font:{
            fontSize:14
        },
        color:'#000'
    });
    
    row.add(labelTitle);
    row.add(subTitle);

    tableview.appendRow(row);
	
}

tableview.addEventListener('click', function(e)
{
    if (e.index == 1)
    {
        
        var subWin = Titanium.UI.currentWindow;
        
        var webview = Titanium.UI.createWebView({
            url:'http://m.tcat.fr/'
        });
        
        subWin.add(webview);
        subWin.open();
    }
});

win.add(tableview);
//
//win.open();