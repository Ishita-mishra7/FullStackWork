const http=require('http');
const PORT=2500;
const server =http.createServer((req,res)=>{
res.write("welcome");
res.end("request ahs been ended");
})
server.listen(PORT,()=>{
    console.log("server is running on"+PORT);
})