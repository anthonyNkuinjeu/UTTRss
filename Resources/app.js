// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//all the size and spaces are in pixels

//Try to get the size of the screen
var WindowWidth = Ti.Platform.displayCaps.platformWidth;
var WindowHeight = Ti.Platform.displayCaps.platformHeight - 40;

//size of an icon
var icon_menu_size = 60;

//space between two icons menu on the x axis
var space_between_icon = 20;


//space between two icons menu on the y axis
var space_between_icon_y_axis = 70;

//space between an icon menu and its label
var space_between_icon_and_label = 5;

//
// create base UI tab and root window
//
var win_menu;

win_menu = Titanium.UI.createWindow({
    title:'Menu',
    orientationModes:[Titanium.UI.PORTRAIT],
    navBarHidden:true,
    exitOnClose:true,
    backgroundImage:'images/utt_3.jpg'
});

//this variable represents to space between the screen and the first button
var x = (WindowWidth -(3*space_between_icon+4*icon_menu_size))/2;

//this variable represents the space between the screen and the first button on the y axis
var y = (WindowHeight - (2*space_between_icon_y_axis+3*icon_menu_size))/2;

//insert all the buttons for the menu
//
//1. button for utt button
//

var button_utt = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x,
    top:y
});

button_utt.backgroundImage = 'images/utt.png';

button_utt.addEventListener('click',function(e) {
    var utt_presentation_win = Titanium.UI.createWindow({
        url: './presentation_utt/utt_presentation.js',
        backgroundColor: '#fff',
        fullscreen:false
    });
    utt_presentation_win.open();
});

win_menu.add(button_utt);

//label for the utt button
var utt_label = Titanium.UI.createLabel({
    text:'Présentation \nde l\'U.T.T.',
    width:60,
    height:'auto',
    left:x,
    top:y+space_between_icon_and_label+icon_menu_size,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(utt_label);

//
//2. button for the UV guide
//

var button_guide_uv = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x+icon_menu_size+space_between_icon,
    top:y
});

button_guide_uv.backgroundImage = 'images/guide_uv.png';

button_guide_uv.addEventListener('click',function(e) {
    var guide_win = Titanium.UI.createWindow({
        url: './guide_formation/guide_uv_menu.js',
        backgroundColor: '#fff',
        fullscreen:false
    });
    guide_win.open();
});

win_menu.add(button_guide_uv);

//label for the uv guide button
var uv_guide_label = Titanium.UI.createLabel({
    text:'Guide \ndes UVs',
    width:60,
    height:'auto',
    left:x+icon_menu_size+space_between_icon,
    top:y+space_between_icon_and_label+icon_menu_size,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(uv_guide_label);

//
//3. button for the localization menu
//

var button_localisation = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x+(2*(icon_menu_size+space_between_icon)),
    top:y
});

button_localisation.backgroundImage = 'images/maps.png';

button_localisation.addEventListener('click',function(e) {
    var localisation_win = Titanium.UI.createWindow({
        modal:true,
        url: './localisation/localisation_win.js'
    });
    localisation_win.open();
});

win_menu.add(button_localisation);

//label for the localisation button
var localisation_label = Titanium.UI.createLabel({
    text:'Se rendre à l\'UTT',
    width:60,
    height:'auto',
    left:x+(2*(icon_menu_size+space_between_icon)),
    top:y+space_between_icon_and_label+icon_menu_size,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(localisation_label);

//
//4. button for news
//

var button_news = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x+(3*(icon_menu_size+space_between_icon)),
    top:y
});

button_news.backgroundImage = 'images/actu.png';

button_news.addEventListener('click',function(e) {
    var news_win = Titanium.UI.createWindow({
        url: './actualites/news_win_menu.js',
        backgroundColor: '#fff',
        fullscreen:false
    });
    news_win.open();
});

win_menu.add(button_news);

//label for the news button
var news_label = Titanium.UI.createLabel({
    text:'Actualités',
    width:60,
    height:'auto',
    left:x+(3*(icon_menu_size+space_between_icon)),
    top:y+space_between_icon_and_label+icon_menu_size,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(news_label);

//
//5. button for calendar
//

var button_calendar = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x,
    top:y+icon_menu_size+space_between_icon_y_axis
});

button_calendar.backgroundImage = 'images/calendar.png';

button_calendar.addEventListener('click',function(e) {
    var calendar_win = Titanium.UI.createWindow({
        url: './evenements/calendar_win.js',
        backgroundColor: '#fff',
        title:'Evènements',
        fullscreen:false
    });
    calendar_win.open();
});

win_menu.add(button_calendar);

//label for the calendar button
var calendar_label = Titanium.UI.createLabel({
    text:'Evénements',
    width:60,
    height:'auto',
    left:x,
    top:y+space_between_icon_and_label+2*icon_menu_size+space_between_icon_y_axis,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(calendar_label);

//
//6. button for the videos
//

var button_video = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x+icon_menu_size+space_between_icon,
    top:y+icon_menu_size+space_between_icon_y_axis
});

button_video.backgroundImage = 'images/tv.png';

button_video.addEventListener('click',function(e) {
    var video_win = Titanium.UI.createWindow({
        url: './videos/videos_win_menu.js',
        backgroundColor: '#fff',
        fullscreen:false
    });
    video_win.open();
});

win_menu.add(button_video);

//label for the video button
var video_label = Titanium.UI.createLabel({
    text:'Vidéos',
    width:60,
    height:'auto',
    left:x+icon_menu_size+space_between_icon,
    top:y+space_between_icon_and_label+2*icon_menu_size+space_between_icon_y_axis,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(video_label);

//
//7. button for the contact book
//

var button_trombi = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x+(2*(icon_menu_size+space_between_icon)),
    top:y+icon_menu_size+space_between_icon_y_axis
});

button_trombi.backgroundImage = 'images/trombi.png';

button_trombi.addEventListener('click',function(e) {
    var trombi_win = Titanium.UI.createWindow({
        url: './trombi_utt/trombi_win.js',
        modal:true
    });
    trombi_win.open();
});

win_menu.add(button_trombi);

//label for the trombi button
var trombi_label = Titanium.UI.createLabel({
    text:'Trombi \nOfficiel',
    width:60,
    height:'auto',
    left:x+(2*(icon_menu_size+space_between_icon)),
    top:y+space_between_icon_and_label+2*icon_menu_size+space_between_icon_y_axis,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(trombi_label);

//
//8. button for pictures
//

var button_photos = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x+(3*(icon_menu_size+space_between_icon)),
    top:y+icon_menu_size+space_between_icon_y_axis
});

button_photos.backgroundImage = 'images/pics.png';

button_photos.addEventListener('click',function(e) {
    var photos_win = Titanium.UI.createWindow({
        url: './photos/photos_win.js',
        modal:true
    });
    photos_win.open();
});

win_menu.add(button_photos);

//label for the pictures button
var pics_label = Titanium.UI.createLabel({
    text:'Photos',
    width:60,
    height:'auto',
    left:x+(3*(icon_menu_size+space_between_icon)),
    top:y+space_between_icon_and_label+2*icon_menu_size+space_between_icon_y_axis,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(pics_label);

//
//9. button for the sport
//

var button_sport = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x,
    top:y+(2*(icon_menu_size+space_between_icon_y_axis))
});

button_sport.backgroundImage = 'images/sport.png';

button_sport.addEventListener('click',function(e) {
    var sport_win = Titanium.UI.createWindow({
        url: './sport_utt/sport_win_menu.js',
        backgroundColor: '#fff',
        fullscreen:false
    });
    sport_win.open();
});

win_menu.add(button_sport);

//label for the sport button
var sport_label = Titanium.UI.createLabel({
    text:'Sport',
    width:60,
    height:'auto',
    left:x,
    top:y+space_between_icon_and_label+3*icon_menu_size+2*space_between_icon_y_axis,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(sport_label);

//
//10. button for restaurants
//

var button_resto = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x+icon_menu_size+space_between_icon,
    top:y+(2*(icon_menu_size+space_between_icon_y_axis))
});

button_resto.backgroundImage = 'images/resto.png';

button_resto.addEventListener('click',function(e) {
    var resto_win = Titanium.UI.createWindow({
        url: './restauration_universitaire/resto_win.js',
        backgroundColor: '#fff',
        fullscreen:false
    });
    resto_win.open();
});

win_menu.add(button_resto);

//label for the restaurant button
var resto_label = Titanium.UI.createLabel({
    text:'Restaurants à l\'Université',
    width:60,
    height:'auto',
    left:x+icon_menu_size+space_between_icon,
    top:y+space_between_icon_and_label+3*icon_menu_size+2*space_between_icon_y_axis,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(resto_label);

//
//11. button for news
//

var button_infos = Titanium.UI.createButton({
    width:60,
    height:60,
    left:x+(2*(icon_menu_size+space_between_icon)),
    top:y+(2*(icon_menu_size+space_between_icon_y_axis))
});

button_infos.backgroundImage = 'images/infos.png';

button_infos.addEventListener('click',function(e) {
    var infos_win = Titanium.UI.createWindow({
        url: './infos_pratiques/infos_win.js',
        backgroundColor: '#fff',
        fullscreen:false
    });
    infos_win.open();
});

win_menu.add(button_infos);

//label for the practical information button
var infos_label = Titanium.UI.createLabel({
    text:'Informations Pratiques',
    width:60,
    height:'auto',
    left:x+(2*(icon_menu_size+space_between_icon)),
    top:y+space_between_icon_and_label+3*icon_menu_size+2*space_between_icon_y_axis,
    font:{
        fontSize:10, 
        fontStyle:'bold'
    },
    color:'#fff',
    shadowColor:'#000',
    shadowOffset:{
        x:5,
        y:5
    },
    textAlign:'center'
});

win_menu.add(infos_label);

Titanium.UI.currentWindow = win_menu;
win_menu.open({});
