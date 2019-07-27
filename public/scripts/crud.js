const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');
const remote = require('electron').remote;

//Close java script
const close=document.getElementById("close").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
}); 


//Create Page window
const crt=document.getElementById('btn1');
crt.addEventListener('click', function (event){

      crtwin = new BrowserWindow({
        width: 380,
        height: 500,
        frame:false,
        resizable:false,
        //icon:taskIcon, 
        skipTaskbar:true,
        //show:false,
        webPreferences:{backgroundThrottling:false, nodeIntegration:true}
      
      });
    //Load html in window
      crtwin.loadURL(url.format({
      pathname: path.join(__dirname, '../html/create.html'),
      protocol: 'file:',
      slashes:true
    }));
    //crtwin.webContents.openDevTools();
})

//Read Page window
const rd=document.getElementById('btn2');
rd.addEventListener('click', function (event){

    let rdwin = new BrowserWindow({
        width: 380,
        height: 500,
        frame:false,
        resizable:false,
        //icon:taskIcon,
        skipTaskbar:true,
        //show:false,
        //webPreferences:{backgroundThrottling:false}
      });

    //Load html in window
      rdwin.loadURL(url.format({
      pathname: path.join(__dirname, '../html/read.html'),
      protocol: 'file:',
      slashes:true
    }));
  

})


//Delete Page window
const dl=document.getElementById('btn4');
dl.addEventListener('click', function (event){

    let dlwin = new BrowserWindow({
        width: 380,
        height: 500,
        frame:false,
        resizable:false,
        //icon:taskIcon,
        skipTaskbar:true,
        //show:false,
        //webPreferences:{backgroundThrottling:false}
      });
    //Load html in window
      dlwin.loadURL(url.format({
      pathname: path.join(__dirname, '../html/delete.html'),
      protocol: 'file:',
      slashes:true
    }));
  

})