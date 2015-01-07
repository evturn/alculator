var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var logger = require('./logger');
  app.use(logger);
var request = require('request');
var url = require('url');

app.use(express.static('public'));

app.get('/', function(require, response) {
	response.render('index.html');
});

		// var searchURL = 'http://api.brewerydb.com/v2/search?q=' + request.query + '&key=' + process.env.BREWERY_DB_KEY;





request.get('http://api.brewerydb.com/v2/search?q="coors"' + '&key=' + process.env.BREWERY_DB_KEY)
			 .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']);
    
    
});



var rounds = {}

app.post('/rounds', parseUrlencoded, function(request, response) {
	var newRound = request.body;
	response.status(201).json(newRound);
});



app.get('/api', function( request, response) {
    response.send('API is running');
});


app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});