var activity = Ti.Android.currentActivity;
var currentWin = Ti.UI.currentWindow;

var db = Ti.Database.install('../bdd_app.sqlite','trombi');

var rows = db.execute('SELECT * FROM personne WHERE nom=\''+Ti.App.person+'\'');

var data=[
    {title:'' + rows.fieldByName('nom') + '', header:'Nom', color:'#000000'},
    {title:'' + rows.fieldByName('mail') + '', header:'Adresse électronique', color:'#000000'},
    {title:'' + rows.fieldByName('telephone') + '', header:'Numéro de téléphone', color:'#000000'}
   // {title:'' + rows.fieldByName('qty') + '', header:'Quantity'}
];

var identifiant=rows.fieldByName('identifiant');
var nom=rows.fieldByName('nom');
var mail=rows.fieldByName('mail');
var telephone=rows.fieldByName('telephone').split('.');
var num_telephone=telephone[0]+telephone[1]+telephone[2]+telephone[3]+telephone[4];


var tableview = Ti.UI.createTableView({
	data:data
});


var menu = null;
var m1 = null;
var m2 = null;
var m3 = null;
var m4 = null;

activity.onCreateOptionsMenu = function(e) {
	menu = e.menu; // save off menu.
	m1 = menu.add({
		itemId : 1,
		groupId : 0,
		order : 0
	});
        m1.addEventListener('click', function(e){
            call();
        });
        
	
        m2=menu.add({
            itemId:2,
            groupId:0,
            order:1
        });
         m2.addEventListener('click', function(e){
            sendSms();
        });

        

        m3=menu.add({
            itemId:3,
            groupId:0,
            order:2
        });
         m3.addEventListener('click', function(e){
            sendMail();
        });

        

        m4=menu.add({
            itemId:4,
            groupId:0,
            order:3
        });
        m4.addEventListener('click', function(e){
            addContact();
        });

        



}

activity.onPrepareOptionsMenu = function(e) {

	var m1a = menu.findItem(1);
        var m2a = menu.findItem(2);
        var m3a = menu.findItem(3);
        var m4a = menu.findItem(4);

        m1a.title='Appeler';
        m2a.title='Envoyer un SMS';
        m3a.title='Envoyer un mail';
        m4a.title='Ajouter aux favoris';
        
        /*
        m1a.addEventListener('click', call());
        m2a.addEventListener('click', sendSms());
        m3a.addEventListener('click', sendMail());
        m4a.addEventListener('click', addContact());
        */
}

function call(){
    //alert('appeler');
    var url = 'tel:'+num_telephone;
    Titanium.Platform.openURL(url);
}

function sendSms(){
    var url = 'sms:'+num_telephone;
    Titanium.Platform.openURL(url);
}

function addContact(){
    //alert('ajouter contact');
    /*var contact = Titanium.Contacts.createPerson({
		fullName:nom,
                email:{'work':[mail]},
                phone:{'work':[num_telephone]}
		//lastName:f2.value,
		//address:{"home":[address]}
	});*/
   
var db2 = Ti.Database.install('../favoris.sqlite','favoris2');
db2.execute('INSERT INTO "personne" VALUES(\''+identifiant+'\',\''+nom+'\',\''+telephone+'\',\''+mail+'\')');
db2.close();
alert('contact ajouté aux favoris');
}

function sendMail(){
    var emailDialog = Titanium.UI.createEmailDialog();
    emailDialog.setToRecipients([mail]);
    emailDialog.open();
    //alert('envoyer mail');
}
currentWin.add(tableview);

