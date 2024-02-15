var http = require('http');
var fs = require('fs');
var buf = Buffer.alloc(1024);
// var dt = require('./myfirstmodule');

// reader.setEncoding('UTF8');

http.createServer(function (req, res) {
    var reader  = fs.createReadStream('input.txt');
    fs.open('input.txt', 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
    
        console.log("File opened successfully!");
        console.log("Going to read the file");
    
        // Read from the file
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if (err){
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal Server Error');
            }
    
           
    
            // Print only the read bytes to avoid junk
            if (bytes > 0) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(buf.slice(0, bytes).toString());
            }
    
            // Close the file
            fs.close(fd, function(err) {
                if (err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                }
                res.writeHead(200,('Content-Type', 'text/plain'));
                res.end('File closed successfully');
                
            });
        });
    });

    
    
}).listen(8081);