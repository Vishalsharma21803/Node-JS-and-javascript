const fs = require("fs");
fs.readFile("dele2.txt",  (err, data)=>{
    if(err) {throw err;}
    // else{
    console.log(data);
    // }
});
console.log("This is a message");