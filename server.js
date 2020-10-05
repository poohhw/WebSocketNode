
const express = require('express');
const http = require('http');
//const Bundler = require('parcel-bundler');
// const Bundler = require('parcel-bundler');


const path = require('path');


var app = express();
app.use('/',express.static(__dirname));
var server = http.createServer(app);

var webSocket = require('./socket')(server);

//app.use(bundler.middleware());


// var wss = new WebSocket.Server();

server.listen(3100,function(){
    console.log('listening on 3100');
})

app.get('/', function (req, res) {
    res.sendFile(file);
});

