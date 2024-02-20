const express = require('express');
app = express();

app.get('/',function(req,res){
    console.log('Got a GET request for the homepage');
    res.send('Hello GET');
})

// 
app.post('/',function(req,res){
    console.log("Get a post resquest for the homepage");
    res.send('Hello POST');
})