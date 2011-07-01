
//
// create base UI tab and root window
//
var win;

win = Titanium.UI.createWindow({
    title:'Restauration Universitaire',
    orientationModes:[Titanium.UI.PORTRAIT]
});

// create table view data object
var data = [
{
    title:'Le RU',
    hasDetail:true,
    test:'ru.js'
},
{
    title:'La cafette "Le p\'tit resto"',
    hasDetail:true,
    test:'cafette.js'
},
{
    title:'Le QG',
    hasDetail:true,
    test:'qg_resto.js'
}

];

var tableview = Titanium.UI.createTableView(
{
    separatorColor:"#000"
});

for (var c = 0; c < data.length; c++)
{


    row = Ti.UI.createTableViewRow({
        height:60,
        fontSize:'14pt',
        color:'#000'
    });
    row.pageTitle = data[c].title;
    row.hasDetail =  data[c].hasDetail;

    var labelTitle = Ti.UI.createLabel({
        text:data[c].title,
        left:10,
        top:12,
        height:35,
        font:{
            fontSize:20
        },
        color:'#000'
    });

    row.add(labelTitle);
    row.pageTitle = data[c].title;
    row.test =  data[c].test;
    row.hasDetail =  data[c].hasDetail;

    tableview.appendRow(row);
}


var subWin;

// create table view event listener
tableview.addEventListener('click', function(e)
{
    if (e.rowData.tab)
    {
    //Titanium.UI.currentTab.setActiveTab(e.rowData.tab);
    }
    else if (e.rowData.test)
    {
        subWin = Titanium.UI.createWindow({
            url:e.rowData.test,
            title:e.rowData.pageTitle,
            modal:true
        });

        subWin.open();
    }
});

// add table view to the window
win.add(tableview);
Titanium.UI.currentWindow = win;
win.open({});