var zlip=require('zlip');
var fs =require ('fs');
var gzip=zlip.createGzip();
var r =fs.createReadStream('input.txt');
var w=fs.createWriteStream('input.txt.gz');
r.pipe(gzip).pipe(w);