var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('listening in http://localhost:' + port);
});

// Static files
app.use(express.static('app'));