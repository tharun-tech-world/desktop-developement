const remote = require('electron').remote;
const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const close=document.getElementById("close").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
}); 