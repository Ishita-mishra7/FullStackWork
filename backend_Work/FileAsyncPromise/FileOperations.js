const fs=require('fs').promises;
const promise=fs.writeFile("data.txt","hello,writing data through fs promise",{encoding:'utf-8'})
//console.log(promise);
promise.then(()=>{
    console.log("data written successfully");
}).catch(err=>{
    console.log("error is"+err)
}).finally(msg=>{console.log("Finally done")})