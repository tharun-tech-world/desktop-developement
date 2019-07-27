const fs= require('fs');
const path= require('path');
const remote = require('electron').remote;

const crtbtn=document.getElementById('crtbtn');
const fileName=document.getElementById('fileName');
const fileContent=document.getElementById('fileContents');

let pathName=path.join(__dirname, '../../Files');
crtbtn.addEventListener('click', function(){
    let file=path.join(pathName, fileName.value)
    let contents=fileContent.value;
    
    fs.writeFile(file, contents, function(err){
        if(err){
            return console.log(err);
        }
        console.log("The file was created.")

    })
    fileName.value = ''
    fileContent.value = '';
})


const close=document.getElementById("close").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
}); 
