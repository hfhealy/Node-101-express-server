/* In order to respond to requests with the top spots data, you'll need to import the data.json file using require().

Exit Criteria

Server should respond to GET requests to / route the top spots page
Server should respond with a status code of 200
Server should log each request using morgan's dev format
Server should indicate when it is listening and on which port (port 3000)
Server should respond to GET requests to data/ route with the top spots data
All tests should pass */

// import files and packages up here
const express = require('express');
const morgan = require('morgan');

var topSpots = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.get('/', function(req, res){
    res.status(200).send('Ok');
})

app.get('/data', function(req, res){
    res.json(topSpots);
})

app.use(morgan('dev'));

// finally export the express application
module.exports = app;
