const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');


const signbtn=document.getElementById('btn');
signbtn.addEventListener('click', function (event){

    let signinwin = new BrowserWindow({
        width: 380,
        height: 500,
        frame:false,
        resizable:false,
        //icon:taskIcon,
        skipTaskbar:true,
        //show:false,
        //webPreferences:{backgroundThrottling:false}
      });

     signinwin.setBounds({  x:800, y:180});
    //Load html in window
      signinwin.loadURL(url.format({
      pathname: path.join(__dirname, '../html/signIn.html'),
      protocol: 'file:',
      slashes:true
    }));
  

})

const signbtn1=document.getElementById('btn1');
signbtn1.addEventListener('click', function (event){

    let signinwin1 = new BrowserWindow({
        width: 380,
        height: 500,
        frame:false,
        resizable:false,
        //icon:taskIcon,
        skipTaskbar:true,
        //show:false,
        //webPreferences:{backgroundThrottling:false}
      });

     signinwin1.setBounds({  x:800, y:180});
    //Load html in window
      signinwin1.loadURL(url.format({
      pathname: path.join(__dirname, '../html/signIn.html'),
      protocol: 'file:',
      slashes:true
    }));
  

})

