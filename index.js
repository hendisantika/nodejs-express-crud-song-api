var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var url = "http://localhost:3000";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var config = require('./config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(config.url);

require('./app/music.route.js')(app);

mongoose.connection.on('error', function () {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database.");
    app.listen(3000, function () {
        console.log('Open this url : ', url);
    });
});