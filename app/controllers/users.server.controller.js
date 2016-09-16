var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            console.log("Failure: " + err);
            return next(err);
        }
        else {
            console.log("Success: " + err);
            res.json(user);
        }
    });
};

exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        }
        else {
            res.json(users);
        }
    });
};

exports.read = function(req, res){
    //spits out the MongoDB document. req.user = the user retrieved by userById
    res.json(req.user);
};



exports.update = function(req, res, next){
	/* 
	User.findOneByUserName('username', function(err, user){
		...
	}
	*/
	/*authenticate
		user.authenticate('password');
	*/
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user){
        if(err){
            return next(err);
        }
        else{
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next){
	req.user.remove(function(err){
		if(err){
			return next(err);
		}
		else{
			res.json(req.user);
		}
	});
};


exports.userById = function(req, res, next, id){
    User.findOne({
        _id: id
    }, 
    function(err, user){
        if(err){
            return next(err);
        }    
        else{
            req.user = user;
            next();
        }
    });
};