var fs = require('fs');
// create a readable stream
var reader  = fs.createReadStream('test.txt');
//  create a writeable stream
var writer = fs.createWriteStream('test2.txt');
writer.on('pipe',() => {
    console.log('Something is piping into thr writer. ');
})
reader.pipe(writer);