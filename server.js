var connect = require('connect');
var app = connect();

var helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

app.use(helloWorld); // can also simply write function in parameter
app.listen(process.env.PORT, process.env.IP);


console.log('Server running at ' + process.env.IP + ':' + process.env.PORT);