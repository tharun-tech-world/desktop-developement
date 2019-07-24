const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');


const nxtbtn=document.getElementById('btn');
nxtbtn.addEventListener('click', function (event){

    let crudwin = new BrowserWindow({
        width: 380,
        height: 500,
        frame:false,
        resizable:false,
        //icon:taskIcon,
        skipTaskbar:true,
        //show:false,
        webPreferences:{backgroundThrottling:false, nodeIntegration:true}
      });

     crudwin.setBounds({  x:800, y:180});
    //Load html in window
      crudwin.loadURL(url.format({
      pathname: path.join(__dirname, '../html/crud.html'),
      protocol: 'file:',
      slashes:true
    }));
    //crudwin.webContents.openDevTools();
  

})

