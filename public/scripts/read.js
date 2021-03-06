const fs= require('fs');
const path= require('path');
const remote = require('electron').remote;

const readbtn = document.getElementById('readbtn');
const fileName = document.getElementById('fileName');
const fileContent = document.getElementById('fileContents');

let pathName = path.join(__dirname, '../../Files');
console.log(pathName);
readbtn.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    
    fs.readFile(file, function(err, data){
        if(err){
            return console.log(err);
        }
        fileContent.value=data;
        console.log("The file was Read.")

    })
})


const close=document.getElementById("close").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
}); 
