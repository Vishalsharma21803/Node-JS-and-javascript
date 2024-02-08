var fs = require('fs');
// create a readable stream
var reader = fs.createReadStream('test.txt');
// create a  writeable stream
// create a writable stream
var writer = fs.createWriteStream('test1.txt');
write.on('unpipe',() => {
    console.log('unpiping occured');
});
reader.unpipe(writer);