var fs=require("fs");
var data='';

//create readable stream
var reader = fs.createReadStream('text.ts');

//set encoding to the udf8

reader.setEncoding('UTF8');

//handle stream event --> data, end, and error

reader.on('data',function(chuck){
    data=chuck;
});

reader.on('end',function(){
    console.log(data);  //print all data at once
});
reader.on('error', function (err) {
   console.log('Error occurred: ' + err);
   });