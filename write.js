var fs=require("fs");
console.log("Going to write something into existing file");
fs.writeFile('input.txt', 'simply  awesome!', function (err) {
    if (err) throw err;
    console.log("Data written to file");
    console.log("lets read newly print data");
    fs.readFile('input.txt','utf8',function(err,data){
        if(err)throw err;
        
        console.log("Asynchronous read: "+ data.toString());
    });
});
