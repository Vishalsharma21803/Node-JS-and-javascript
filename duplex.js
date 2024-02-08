var fs = require('fs');
var data = 'this is node.js class';

// create a variable stream

var writer = fs.createWriteStream('test.txt');
var reader = fs.createReadStream('test.txt');

// write a data stream with encoding to be utf8
writer.write(data,'UTF8');

// mark the end of file

writer.end();

// Handle stream events --> data, end, and error

writer.on('finish',function(){
    console.log("Write completed");
});


var data = '' ;
reader.on('data',function(chunk){
    data = chunk;
});

reader.on('end',function(){
    console.log(data.toString());
});
writer.on('error',function(err){
    console.error(err);
})