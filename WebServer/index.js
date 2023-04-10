 const http= require("http");
 const server=http.createServer((req,res)=>{
   
    if(req.url=="/")
    {
        res.end("Home page ");
    }
    else if(req.url=="/contact")
    {
        res.end("contact page");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error page , Page Doesn't exist</h1>");

    }
 });

 server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to port no 8000");
 })