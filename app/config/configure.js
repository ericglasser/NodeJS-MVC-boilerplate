var express = require('express');

var commonConfiguration = function (app) {

  return function () {
    app.set('address', '127.0.0.1');
    app.set('port', 8000);

    //app.set('views','../views');
    //app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));

    // this require configures specific environment (development, production, etc)
    //require('./' + app.settings.env)(app);

    // route last so environment specific things can add to middleware
    app.use(app.router);

    // Set encryption key
    app.set('encryptionKey', 'UjdiuW8#7$656f)28DkieuruE93LSmSw');

  };

};

module.exports = commonConfiguration;