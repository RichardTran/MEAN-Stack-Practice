exports.render = function(req, res) {
    //req.session is an object that actually exists
    // lastVisit is a variable that we named ourselves.
    // Code will work the same as req.session.batman
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'Hello World'
    })
};