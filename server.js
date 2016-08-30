var connect = require('connect');
var app = connect();

app.listen(process.env.PORT, process.env.IP);

console.log('Server running at ' + process.env.IP + ':' + process.env.PORT);