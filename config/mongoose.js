var config = require('./config'),
    mongoose = require('mongoose');
    
module.exports = function() {
    var db = mongoose.connect(config.db);
    // Require alone is equivalent to writing all the code from that
    // file to this file
    require('../app/models/user.server.model');
    require('../app/models/article.server.model');
    
    return db;
};