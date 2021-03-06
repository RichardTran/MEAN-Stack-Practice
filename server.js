process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(process.env.PORT);

module.exports = app;

console.log('Server is running on: '+process.env.IP+":"+process.env.PORT);

