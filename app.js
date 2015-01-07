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
	beerQuery 			 = requestQuery.name;
	beerChoice(beerQuery);
	response.json(beersList);
});

var	beersList = [];

function beerChoice(searchTerm, success, error) {
	target = 'http://api.brewerydb.com/v2/search?q=' + beerQuery + '&key=' + process.env.BREWERY_DB_KEY;
	console.log('target', target);
	console.log('searchTerm', searchTerm);
	request(target, function(err, response, body) {
		if(!err && response.statusCode === 200) {
				var beerResults = (JSON.parse(body));
				var beerObjects = beerResults.data;			
				beerObjects.forEach(function(potentialBeers) {
					var beersOnly = {};
					if (potentialBeers.type === 'beer') {
				  	beersOnly.name  = potentialBeers.name;
				  	beersOnly.abv	  = potentialBeers.abv;
				 		console.log('success 1', success)
					 	beersList.push(beersOnly);
						console.log('success 2', success)
					} 	
				})
			console.log('success 3', success)
		} else {
			console.log('Something went wrong', error)
		}
		theBeer = beersList[0];
		console.log('success 3', success)
		console.log('beersList', beersList);
		console.log('theBeer', theBeer);
	});	
	console.log('success 4', success)
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