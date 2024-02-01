var fs=require("fs");
// Asynchronous open
console.log("Going to open file!");
fs.open('mynewfile.txt', 'r+', function(err, fd) {
    if (err) console.error(err);
    console.log("File opened successfully.");
});