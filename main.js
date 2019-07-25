const electron = require('electron');
const path = require('path');
const url = require('url');
const iconPath= path.join(__dirname, './public/assets/abhi.png')
const {app, BrowserWindow, Tray, Menu, ipcMain} = electron;
const fs = require('fs');
const os = require('os');
const nativeImage= electron.nativeImage;


// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent(app)) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

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
          win.isVisible() ? win.hide() : win.show();
          
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
    //console.log(win.getBounds())
  //Load html in window
    win.loadURL(url.format({
    pathname: path.join(__dirname, './public/html/welcomecrud.html'),
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

  //Developers tools 
  //win.webContents.openDevTools();

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




function handleSquirrelEvent(application) {
  if (process.argv.length === 1) {
      return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
      let spawnedProcess, error;

      try {
          spawnedProcess = ChildProcess.spawn(command, args, {
              detached: true
          });
      } catch (error) {}

      return spawnedProcess;
  };

  const spawnUpdate = function(args) {
      return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
      case '--squirrel-install':
      case '--squirrel-updated':
          // Optionally do things such as:
          // - Add your .exe to the PATH
          // - Write to the registry for things like file associations and
          //   explorer context menus

          // Install desktop and start menu shortcuts
          spawnUpdate(['--createShortcut', exeName]);

          setTimeout(application.quit, 1000);
          return true;

      case '--squirrel-uninstall':
          // Undo anything you did in the --squirrel-install and
          // --squirrel-updated handlers

          // Remove desktop and start menu shortcuts
          spawnUpdate(['--removeShortcut', exeName]);

          setTimeout(application.quit, 1000);
          return true;

      case '--squirrel-obsolete':
          // This is called on the outgoing version of your app before
          // we update to the new version - it's the opposite of
          // --squirrel-updated

          application.quit();
          return true;
  }
};

