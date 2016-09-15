var users = require('../../app/controllers/users.server.controller');

module.exports = function(app){
    app.route('/users')
        .post(users.create)
        .get(users.list);
    
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
    
    // runs before app.route as soon as a request parameter is present (after the colon)
    app.param('userId', users.userById);
}
