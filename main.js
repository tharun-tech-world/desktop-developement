const electron = require('electron');
const path = require('path');
const url = require('url');
const iconPath= path.join(__dirname, './assets/abhi.png')
const {app, BrowserWindow, Tray, Menu, ipcMain} = electron;
const fs = require('fs');
const os = require('os');

let win;
let tray=null;
function createWindow(){

  
  //Tray ICon Implementation.
  tray=new Tray(iconPath);
  tray.setToolTip('Abhi App');
  
  let template=[{

    label: 'Quit',
  }]
  const trayMenu=Menu.buildFromTemplate(template);
  tray.setContextMenu(trayMenu);

  tray.on('click',(e,b)=>{

    if(win.isVisible()){
      win.hide();
    }
    else{
      win.show();
      win.setBounds({
        x: b.x-250,
        y: b.y-500,
        width: 380,
        height: 500

      })
    }
  })
  // Create new window
    win = new BrowserWindow({
      width: 380,
      height: 500,
      frame:false,
      resizable:false,
      //skipTaskbar:true,
      //show:false,
      //webPreferences:{backgroundThrottling:false}
    
    });
    win.setBounds({  x:800, y:180})
    console.log(win.getBounds())
  //Load html in window
    win.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes:true
  }));

  win.on('closed', ()=>{
    win=null;
  })
}

// Listen for app to be ready
app.on('ready', createWindow );

app.on("window-all-closed", ()=>{
  if(process.platform!=='darwin')

  app.quit();
})

app.on('activate', ()=>{

  if(win===null){

    createWindow()
  }
})



