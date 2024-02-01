var fs = require("fs");
var buf  =new Buffer(1024);

console.log('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");

    fs.read(fd,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        console.log(bytes + "bytes read");
        // print only to read bytes to avoid junk
        if(bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }
    })
});
