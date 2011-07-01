
// TabGroup
var tabGroup = Titanium.UI.createTabGroup(
{
    backgroundColor:'#3366FF',
    barColor:'#3333FF'
});

// Tab1 : CS Automne
var win1 = Titanium.UI.createWindow({});

var tab1 = Titanium.UI.createTab({
    title:'CS Automne',
    icon:'../images/icon_cs.png',
    window:win1
});

// Tab2 : TM Automne
var win2 = Titanium.UI.createWindow({});

var tab2 = Titanium.UI.createTab({
    title:'TM Automne',
    icon:'../images/icon_tm.png',
    window:win2
});

// Tab3 : CS Printemps
var win3 = Titanium.UI.createWindow({});

var tab3 = Titanium.UI.createTab({
    title:'CS Printemps',
    icon:'../images/icon_cs.png',
    window:win3
});

// Tab4 : TM Printemps
var win4 = Titanium.UI.createWindow({});

var tab4 = Titanium.UI.createTab({
    title:'TM Printemps',
    icon:'../images/icon_tm.png',
    window:win4
});

// Add all tabs to tabGroup
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);


// WARNING THE NAME OF THE DATABASE IS CAHED SO YOU NEED TO CHANGE THE NAME AND REMOVE IT AFTER EACH TEST

db = Ti.Database.install('../UTTRssDB.sqlite','guide');
db.remove();

db = Ti.Database.install('../UTTRssDB.sqlite','guide');

var rows = db.execute('SELECT code FROM uvsTCB WHERE typeUV = "CS" AND semestre = "Automne" AND typeBranche = "SRT" ORDER BY code ');

var dataArray1 = [];
var dataArray2 = [];
var dataArray3 = [];
var dataArray4 = [];
var i=0;

while (rows.isValidRow())
{
    var rows_title_uv = db.execute('SELECT titre FROM descriptionUVs WHERE code = "' + rows.fieldByName('code') + '"');
    
    dataArray1[i]=Ti.UI.createTableViewRow({
        hasChild:true,
        title:''+rows.fieldByName('code'),
        title_uv:''+rows_title_uv.fieldByName('titre')        
    });
    
    i++;
    rows.next();
    rows_title_uv.close();
}

rows.close();

var tableview = Ti.UI.createTableView({
    backgroundColor:'#fff',
    minRowHeight:80
});

for (var c = 0; c < dataArray1.length; c++)
{
	
    rowMenu = Ti.UI.createTableViewRow({
        height:40, 
        fontSize:'16pt', 
        color:'#000'
    });
    
    var labelTitle = Ti.UI.createLabel({
        text:dataArray1[c].title,
        left:10,
        top:5,
        height:35,
        font:{
            fontStyle:'bold',
            fontSize:16
        },
        color:'#004276'
    });
    
    rowMenu.add(labelTitle); 
    
    var label_uv_Title = Ti.UI.createLabel({
        text:dataArray1[c].title_uv,
        left:10,
        top:35,
        height:35,
        font:{
            fontSize:14
        },
        color:'#000'
    });
    
    rowMenu.add(label_uv_Title); 
	
    tableview.appendRow(rowMenu);
	
}

tableview.addEventListener('click', function(e)
{

    var uv_choosed_win = Ti.UI.createWindow({
        url:'infos_uv.js',
        title:dataArray1[e.index].title,
        backgroundColor:'#fff'
    });
    
    var uv_choosed = dataArray1[e.index].title;
    uv_choosed_win.uv_choosed = uv_choosed;
    
    Ti.UI.currentTab.open(uv_choosed_win);
});

win1.add(tableview);

i=0;

// Rows for only TM courses
rows = db.execute('SELECT code FROM uvsTCB WHERE typeUV = "CS" AND semestre = "Printemps" AND typeBranche = "SRT" ORDER BY code ');

while (rows.isValidRow())
{
    dataArray2[i]=Ti.UI.createTableViewRow({
        hasChild:true,
        title:''+rows.fieldByName('code')
    });
    i++;
    rows.next();
}

rows.close();

var tableview2 = Ti.UI.createTableView({
    backgroundColor:'#fff'
});

for (c = 0; c < dataArray2.length; c++)
{
	
    rowMenu2 = Ti.UI.createTableViewRow({
        height:40, 
        fontSize:'16pt', 
        color:'#000'
    });
    
    var labelTitle2 = Ti.UI.createLabel({
        text:dataArray2[c].title,
        left:10,
        top:5,
        height:35,
        font:{
            fontSize:16
        },
        color:'#000'
    });
    
    rowMenu2.add(labelTitle2);    
	
    tableview2.appendRow(rowMenu2);
	
}

tableview2.addEventListener('click', function(e)
{
    var uv_choosed_win = Ti.UI.createWindow({
        url:'infos_uv.js',
        title:dataArray2[e.index].title,
        backgroundColor:'#fff'
    });
    
    var uv_choosed = dataArray2[e.index].title;
    uv_choosed_win.uv_choosed = uv_choosed;
   
    Ti.UI.currentTab.open(uv_choosed_win);
});

win2.add(tableview2);

i=0;

// Rows for only TM courses
rows = db.execute('SELECT code FROM uvsTCB WHERE typeUV = "TM" AND semestre = "Automne" AND typeBranche = "SRT" ORDER BY code ');

while (rows.isValidRow())
{
    dataArray3[i]=Ti.UI.createTableViewRow({
        hasChild:true,
        title:''+rows.fieldByName('code')
    });
    i++;
    rows.next();
}

rows.close();

var tableview3 = Ti.UI.createTableView({
    backgroundColor:'#fff'
});

for (c = 0; c < dataArray3.length; c++)
{
	
    rowMenu3 = Ti.UI.createTableViewRow({
        height:40, 
        fontSize:'16pt', 
        color:'#000'
    });
    
    var labelTitle3 = Ti.UI.createLabel({
        text:dataArray3[c].title,
        left:10,
        top:5,
        height:35,
        font:{
            fontSize:16
        },
        color:'#000'
    });
    
    rowMenu3.add(labelTitle3);    
	
    tableview3.appendRow(rowMenu3);
	
}


tableview3.addEventListener('click', function(e)
{

    var uv_choosed_win = Ti.UI.createWindow({
        url:'infos_uv.js',
        title:dataArray3[e.index].title,
        backgroundColor:'#fff'
    });
    
    var uv_choosed = dataArray3[e.index].title;
    uv_choosed_win.uv_choosed = uv_choosed;
    Ti.UI.currentTab.open(uv_choosed_win);
});

win3.add(tableview3);

i=0;

// Rows for only TM courses
rows = db.execute('SELECT code FROM uvsTCB WHERE typeUV = "TM" AND semestre = "Printemps" AND typeBranche = "SRT" ORDER BY code ');

while (rows.isValidRow())
{
    dataArray4[i]=Ti.UI.createTableViewRow({
        hasChild:true,
        title:''+rows.fieldByName('code')
    });
    i++;
    rows.next();
}

rows.close();

var tableview4 = Ti.UI.createTableView({
    backgroundColor:'#fff'
});

for (c = 0; c < dataArray4.length; c++)
{
	
    rowMenu4 = Ti.UI.createTableViewRow({
        height:40, 
        fontSize:'16pt', 
        color:'#000'
    });
    
    var labelTitle4 = Ti.UI.createLabel({
        text:dataArray4[c].title,
        left:10,
        top:5,
        height:35,
        font:{
            fontSize:16
        },
        color:'#000'
    });
    
    rowMenu4.add(labelTitle4);    
	
    tableview4.appendRow(rowMenu4);
	
}

tableview4.addEventListener('click', function(e)
{

    var uv_choosed_win = Ti.UI.createWindow({
        url:'infos_uv.js',
        title:dataArray4[e.index].title,
        backgroundColor:'#fff'
    });
    
    var uv_choosed = dataArray4[e.index].title;
    uv_choosed_win.uv_choosed = uv_choosed;
    Ti.UI.currentTab.open(uv_choosed_win);
});

win4.add(tableview4);

tabGroup.open({
    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});


