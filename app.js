var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var logger = require('./logger');
  app.use(logger);
var request = require('request');
var url = require('url');
var http = require('http');

app.use(express.static('public'));

app.get('/', function(require, response) {
	response.render('index.html');
});



app.get('/beers', function(request, response) {

	var requestQuery = request.query;
	console.log('requestQuery', requestQuery);
	beerQuery 			 = requestQuery.name;
	console.log('beerQuery', beerQuery)
	var beerObj = beerChoice(beerQuery);
	response.json(beerObjects);
});

var beerChoice = function(searchTerm) {
	var target = 'http://api.brewerydb.com/v2/search?q=' + beerQuery + '&key=' + process.env.BREWERY_DB_KEY;
	console.log('target', target);
	console.log('searchTerm', searchTerm);
	var beersList = []
	request(target, function(err, response, body) {
		if(!err && response.statusCode === 200) {
				var beerResults = (JSON.parse(body));
				var beerObjects = beerResults.data;
				console.log('beerObjects', beerObjects);
		} else {
			console.log('You got problems', err);
		}
	});
};


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