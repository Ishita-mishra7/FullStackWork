const fs=require('fs');
function myWriteFile(){
try{
console.log("before writing");
fs.writeFileSync("data.txt","Data is written by nodejs");
console.log("Data Written successfully");
}catch(err){
    console.log("error in writing the data:"+err);
}
}

function myReadFile(){
try{
console.log("before reading");
const rd=fs.readFileSync("data.txt");
console.log(rd.toString());
console.log("after reading");
}catch(err){
    console.log("error in raeding the data:"+err);
}
}
function myAppendFile(){
try{
console.log("before append");
fs.appendFileSync("data.txt","appended data by fs module");
console.log("after append");
}catch(err){
    console.log("error in appending the data:"+err);
}
}


function myDeleteFile(){
try{
fs.unlinkSync("data.txt");
console.log("file deleted");
}catch(err){
    console.log("error in deleting the data:"+err);
}
}

obj={myWriteFile,myReadFile,myAppendFile,myDeleteFile}
module.exports=obj;