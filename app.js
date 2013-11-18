var express = require('express');
var app = module.exports = express();
var configure = require(process.cwd() + '/app/config/configure');

app.configure(configure(app));