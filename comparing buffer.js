var buffer1 = new Buffer.from('tutorisls point');
var buffer2 = new Buffer.from(' simply easy');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content : " +buffer3.toString());