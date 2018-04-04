// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose')

// install load and conf body parse module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default or Heroku port
app.listen(process.env.PORT, function(err) {
    if (err) {
        console.log("Error: unable to listen to port")
    } else {
        console.log("app listening")
    }
});

mongoose.connect(process.env.MONGODB_URI, function (err, db) {
    if (err) {
        console.log("Error: unable to connect to db");
    } else {
        console.log("db connected");
    }
})
mongoose.Promise = global.Promise;

// app.js must be loaded and initialized from server.js
require("./assignment/app.js")(app);
