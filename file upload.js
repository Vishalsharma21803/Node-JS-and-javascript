const express = require('express');
const  fileUpload = require("express-fileUpload");
const app = express();
app.use(fileUpload);
app.post("/upload", function (req, res){
    if(req.file && Object.keys(req.files).length !==0){
        const uploadFile = req.files.uploadFile;
        console.log(uploadFile);
        const uploadPath=__dirname+'/uploads/'+uploadedFile.name
        
    }
});