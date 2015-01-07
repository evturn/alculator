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


var beersList = [];
console.log('beersList before route', beersList);

app.get('/beers', function(request, response) {
	console.log('beersList inside route before request', beersList);
	var requestQuery = request.query;
	beerQuery 			 = requestQuery.name;
	console.log(beerQuery)
	console.log('beersList before function', beersList);
	beerChoice(beerQuery);
	console.log('beersList after function', beersList);
	response.send(beersList);
});


var beerChoice = function(searchTerm, success, error) {
	var target = 'http://api.brewerydb.com/v2/search?q=' + beerQuery + '&key=' + process.env.BREWERY_DB_KEY;
	console.log('target', target);
	console.log('searchTerm', searchTerm);
	console.log('beersList before request function', beersList);
	request(target, function(err, response, body) {
		if(!err && response.statusCode === 200) {
				var beerResults = (JSON.parse(body));
				var beerObjects = beerResults.data;
				console.log('beersList inside if', beersList);
				beerObjects.forEach(function(potentialBeers) {
					beersOnly = {};
					console.log('beersList with beersOnly', beersList);
					if (potentialBeers.type === 'beer') {
				  	beersOnly.name  = potentialBeers.name;
				  	beersOnly.abv	  = potentialBeers.abv;
				  	console.log('beersList in potentialBeers', beersList);
				 		beersList.push(beersOnly)
				 		console.log('beersList after push', beersList);
				 		theBeer = beersList[0];
						console.log('theBeer', theBeer);
						console.log('beerQuery', beerQuery);
						console.log('searchTerm', searchTerm);
						console.log('success', success);
						console.log('error', err);
						console.log('searchTerm', searchTerm);
						console.log('beersList end of function', beersList);
						
					}
					console.log('beersList hanging', beersList);
				})
		} else {
			console.log('You got problems', err);
			console.log('beersList else', beersList);
		}
		console.log('beersList blackhole', beersList);
	});
console.log('beersList overkill', beersList);
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