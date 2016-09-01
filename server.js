var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
    console.log(req.method, req.url);
    next();
};

var helloWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

var goodbyeWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
//app.use(helloWorld); // can also simply write function in parameter
app.listen(process.env.PORT, process.env.IP);


console.log('Server running at ' + process.env.IP + ':' + process.env.PORT);