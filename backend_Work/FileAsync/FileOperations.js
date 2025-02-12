const fs=require('fs');
function dataWriteCB(){
    fs.writeFile("data.pdf","Hello Writing PDF file data",(err)=>{
        if(err){
            console.log("Error while writing in file"+err);
        }
        console.log("Data written successfully");
    });
    console.log("Resources closed");
}


function dataReadCB(){
    fs.readFile("data.pdf",{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log("Error while reading the file:"+err)
        }
        console.log(data);
    
    })
}

const obj={dataWriteCB,dataReadCB}
module.exports=obj