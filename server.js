// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose')

// install load and conf body parse module
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
var dev_SESSION_SECRET="keyboard cat"
app.use(session({secret: process.env.SESSION_SECRET || dev_SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default or Heroku port
app.listen(process.env.PORT || 3002, function(err) {
    if (err) {
        console.log("Error: unable to listen to port")
    } else {
        console.log("app listening")
    }
});

var dev_MONGODB_URI='mongodb://heroku_ktjt7fmq:ohvueos5gh9cs2469au0q3kfma@ds241668.mlab.com:41668/heroku_ktjt7fmq'
mongoose.connect(process.env.MONGODB_URI || dev_MONGODB_URI, function (err, db) {
    if (err) {
        console.log("Error: unable to connect to db");
    } else {
        console.log("db connected");
    }
})
mongoose.Promise = global.Promise;

// app.js must be loaded and initialized from server.js
require("./assignment/app.js")(app);
