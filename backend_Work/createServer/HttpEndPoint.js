const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("welcome to nodejs server");
    console.log(Object.keys(res));
    res.end("server response has completed");
})
server.listen(2500,()=>{
    console.log("server is running on "+2500);
})