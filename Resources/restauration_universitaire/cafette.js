var win = Titanium.UI.currentWindow;

var label=Ti.UI.createLabel({
    text:'Consulter les menus du jour\nou de la semaine dans les\nrestaurants universitaires de\nl\'U.T.T.',
    texAlign:'center',
    top:'0'
});

win.add(label);

var data=[
  {title:'Le RU', hasChild:true},
  {title:'La Cafette', hasChild:true}
];

var tableview=Ti.UI.createTableView({
   data:data,
   top:'60'
});

win.add(tableview);

tableview.addEventListener('click', function(e){
    var resto=e.rowData.title;
    var restoHome = Ti.UI.createWindow({
                
               // title: 'Le RU'
                //backgroundImage:'../default_menu.png'
        });
   // alert(Ti.resto);
    if(resto=='Le RU'){
        restoMenu.url='ru.js';
        restoMenu.title='Le RU';

    }
    else{
        restoMenu.url='cafette.js';
        restoMenu.title='La cafette'
    }
    Ti.UI.currentWindow.open(restoHome);
});