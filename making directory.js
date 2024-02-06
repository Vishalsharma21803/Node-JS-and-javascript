const fs = require('fs');

console.log("Going to crete  a new directory");
fs.mkdir('C:\Users\hp\Desktop\Sem 4 Node Js\open read.js', function(err) {
    if (err) {
        return console.error(err);
        }
        console.log("Directory created!");
});