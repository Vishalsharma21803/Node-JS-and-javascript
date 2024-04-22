const http=require("http");
const fs=require('fs');

const home=fs.readFileSync("./home.html");
const contact=fs.readFileSync("./contact.html");
const services=fs.readFileSync("./services.html");
const navigation=fs.readFileSync("./navigation.html");

let port=3000;
let hostname='127.0.0.1';
const server=http.createServer((req,res)=>{
    url=req.url;
    res.setHeader("Content-Type","text/html");
    res.statusCode=200;

    if(url=="/"){
        res.end(home);
    }
    else if(url=="/contact"){
        res.end(contact)
    }
    else if(url=="/services"){
        res.end(services);
    }
    else if(url=="/navigation"){
        res.end(navigation);
    }
    else{
        res.statusCode=404;
        res.end("<h1>404 not found</h1>");
    }
    
});
server.listen(port, hostname,()=>{
    console.log(`the server is listening on ${port}`);
});