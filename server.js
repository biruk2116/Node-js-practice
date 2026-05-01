const ht=require('node:http');

const server=ht.createServer((req,res) =>{
    res.writeHead(200);
    res.end("Hello server");
})

server.listen(3000,() => {
    console.log("Server is running on port 3000")
});