var express = require('express');
var app = express();
var path = require('path');
var upperCaser = require('./program.js')



app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

console.log(upperCaser('hello'));
app.listen(8080);
