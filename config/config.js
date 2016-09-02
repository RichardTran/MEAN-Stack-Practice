module.exports = require('./env/development.js');

/*
    -- module.exports = require('./env/' + process.env.NODE_ENV + '.js');
    
    Automatically chooses which config file based on process.env.NODE_ENV environment ---
    variable.

    It is recommended that you set the NODE_ENV environment variable in
    your operating system prior to running your application.
    
    In a Windows environment, this can be done by executing the following
    command in your command prompt:
        > set NODE_ENV=development
    While in a Unix-based environment, you should simply use the following
    export command:
        $ export NODE_ENV=development

*/
