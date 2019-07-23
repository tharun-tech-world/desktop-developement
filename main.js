const electron = require('electron');
const path = require('path');
const url = require('url');
const iconPath= path.join(__dirname, './public/assets/abhi.png')
const {app, BrowserWindow, Tray, Menu, ipcMain} = electron;
const fs = require('fs');
const os = require('os');
const nativeImage= electron.nativeImage;


let win;
let tray=null;
//let taskIcon=nativeImage.createFromPath(path.join(__dirname,'./public/assets/abhi.png'));

function createWindow(){
        //Tray ICon Implementation.
        tray=new Tray(iconPath);
        tray.setToolTip('Tharun App');
        let template=[{
          label: 'Quit',
          click:  function(){
            app.isQuiting = true;
            app.quit();
          }
        }]
        const contextMenu=Menu.buildFromTemplate(template);
        tray.setContextMenu(contextMenu);
        tray.on('click',(e,b)=>{
            if(win.isVisible()){
              win.hide();
            }
            else{
              win.show();
              win.setBounds({
                  x: b.x-250,
                  y: b.y-500,
                  
              })
            }
        }) 
  // Create new window
    win = new BrowserWindow({
      width: 380,
      height: 500,
      frame:false,
      resizable:false,
      //icon:taskIcon,
      skipTaskbar:true,
      //show:false,
      //webPreferences:{backgroundThrottling:false}
    
    });
    win.setBounds({  x:800, y:180})
    console.log(win.getBounds())
  //Load html in window
    win.loadURL(url.format({
    pathname: path.join(__dirname, './public/html/welcome.html'),
    protocol: 'file:',
    slashes:true
  }));

   // Task Bar ICon 
   win.setThumbarButtons([
    {
      tooltip: 'Tharun App',
      icon: path.join(__dirname, './public/assets/abhi.png'),
    }
  ]);

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



