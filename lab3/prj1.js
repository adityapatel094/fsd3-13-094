import http from 'http';
const server = http.createServer();
server.on("request",(req,res)=>{
    res.write("hello Client");
    res.end();
});
server.listen(3000,()=>{
    console.log("server is running on port 3000...");
});