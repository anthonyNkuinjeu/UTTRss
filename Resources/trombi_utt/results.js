var currentWin = Ti.UI.currentWindow;


var db = Ti.Database.install('../bdd_app.sqlite','trombi2');

var rows = db.execute('SELECT nom FROM personne WHERE nom like \'%'+Ti.App.nameToSearch+'%\'');

var dataArray = [];
var i=0;
while (rows.isValidRow())
{
    dataArray[i]=Ti.UI.createTableViewRow({hasChild:true,title:''+rows.fieldByName('nom'), color:'#000000'});
    i++;
    rows.next();
};


var tableview = Ti.UI.createTableView({
    data:dataArray
});

tableview.addEventListener('click', function(e)
{
	// event data
        Titanium.App.person=e.rowData.title;
        Titanium.API.info(Titanium.App.person);

         var personWin = Ti.UI.createWindow({
                backgroundColor:'#fff',
                url:'info.js',
                title: 'Informations'
               // backgroundImage:'default_menu.png'
        });
        Ti.UI.currentTab.open(personWin);
});




currentWin.add(tableview);

