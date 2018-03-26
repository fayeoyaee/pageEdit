// server.js
const express = require('express');
const app = express();

// install load and conf body parse module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Run the app by serving the static files
// in the dist directory
// app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/dist'));

// app.js must be loaded and initialized from server.js
require("./assignment/app.js")(app);
// Start the app by listening on the default or Heroku port
app.listen(process.env.PORT || 8080);