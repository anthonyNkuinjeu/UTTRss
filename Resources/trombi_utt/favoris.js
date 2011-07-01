var activity = Ti.Android.currentActivity;
var WindowWidth = Ti.Platform.displayCaps.platformWidth;
var WindowHeight = Ti.Platform.displayCaps.platformHeight;
var del;

var currentWin = Ti.UI.currentWindow;
var db = Titanium.Database.open('favoris2');
//var db = Ti.Database.install('favoris.sqlite','favoris2');
var rows = db.execute('SELECT nom FROM personne');
var consultation=Ti.UI.createButton({
    height:50,
    title:'Consultation',
    top:WindowHeight-150,
    width:WindowWidth/2,
    left:0
});
var suppression=Ti.UI.createButton({
    height:50,
    title:'Suppression',
    
    top:consultation.top,
    width:WindowWidth/2,
    right:0
});
var dataArray = [];
var i=0;
while (rows.isValidRow())
{
    Titanium.API.info(rows.fieldByName('nom'));
    dataArray[i]=Ti.UI.createTableViewRow({hasChild:true,title:''+rows.fieldByName('nom'), color:'#000000'});
    i++;
    rows.next();
    
};


var tableview = Ti.UI.createTableView({
    data:dataArray,
    down:suppression.height
});

currentWin.add(tableview);
currentWin.add(consultation);
currentWin.add(suppression);
tableview.addEventListener('click', function(e)
{
    if(del==true){
       
        Titanium.App.person=e.rowData.title;
        db.execute('delete from personne WHERE nom=\''+Ti.App.person+'\'');

        var index = e.index;
	//Ti.API.info("deleting row "+index);

	try {
		tableview.deleteRow(index,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.UP});
	} catch (E) {
		Ti.UI.createNotification({ message: E.message }).show();
	}
    }
    else if(del==false){
        
        Titanium.App.person=e.rowData.title;
        var personWin = Ti.UI.createWindow({
                backgroundColor:'#fff',
                url:'info.js',
                title: 'Informations'
               // backgroundImage:'default_menu.png'
        });
        Ti.UI.currentTab.open(personWin);
    }
    else{
        alert('Veuillez choisir l\'action à entreprendre');
    }

   
	// event data
        /*Titanium.App.person=e.rowData.title;
        Titanium.API.info(Titanium.App.person);

         var personWin = Ti.UI.createWindow({
                backgroundColor:'#fff',
                url:'info.js',
                title: 'Informations'
               // backgroundImage:'default_menu.png'
        });
        Ti.UI.currentTab.open(personWin);*/
});
consultation.addEventListener('click', function(e){
    alert('Choisissez la personne que vous voulez contacter');
    del=false;
    consultation.enabled=false;
    suppression.enabled=true;
});

suppression.addEventListener('click', function(e){
    del=true;
    consultation.enabled=true;
    suppression.enabled=false;
    alert('Choisissez la personne que vous voulez supprimer des favoris');
});

var menu = null;
var m1 = null;

activity.onCreateOptionsMenu = function(e) {
	menu = e.menu; // save off menu.
	m1 = menu.add({
		itemId : 1,
		groupId : 0,
		order : 0
	});
        m1.addEventListener('click', function(e){
            //db.execute('delete from personne WHERE nom=\''+Ti.App.person+'\'');
            //alert('La liste des favoris a été vidée')
            var resultsWin = Ti.UI.createWindow({
                url:'results.js',
                backgroundColor:'#fff',
                title: 'Résultats'
        });
        Ti.UI.currentTab.open(resultsWin);
        });

}

activity.onPrepareOptionsMenu = function(e) {

	var m1a = menu.findItem(1);
        m1a.title='Vider la liste';

}