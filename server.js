var express = require('express');
var app = express();

app.use('/', function(req, res) {
    res.send('Hello World');
});

app.listen(process.env.PORT);
console.log('Server running at http://localhost:3000/');

module.exports = app;