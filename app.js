var express 				= require('express');
var app 						= express();
var bodyParser 			= require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var logger 					= require('./logger');
  app.use(logger);
var request 				= require('request');
var url 						= require('url');
var http 						= require('http');
var fs 							= require('fs');

app.use(express.static('public'));

app.get('/', function(require, response) {
	response.render('index.html');
});

var rounds = {}
app.post('/rounds', parseUrlencoded, function(request, response) {
	var newRound = request.body;
	response.status(201).json(newRound);
});

app.get('/search/beers', function(request, response) {	
	var requestQuery = request.query;
	beerQuery 			 = requestQuery.name;
	beerChoice(response);
});


app.get('/booze', function(request, response) {

	// response.json();
});

app.post('/booze', function(request, response) {
	
});

app.delete('/booze', function(request, response) {

});

app.get('/liquor', function(request, response) {
	var jsonLiquor;
	fs.readFile('./liquor.json', 'utf8', function(error, data) {
		if (error) throw error;
			jsonLiquor = JSON.parse(data);
			console.log('liquor', jsonLiquor);
	});
	response.json(jsonLiquor);
});

app.get('/beers', function(request, response) {
	var jsonBeer;
	fs.readFile('./beer.json', 'utf8', function(error, data) {
		if (error) throw error;
			jsonLiquor = JSON.parse(data);
			console.log('beer', jsonBeer);
	});
	response.json(jsonBeer);
});


var beerChoice = function(responseObject) {
	var	beersList = [];
	target = 'http://api.brewerydb.com/v2/search?q=' + beerQuery + '&key=' + process.env.BREWERY_DB_KEY;
	console.log('target', target);
	request(target, function(err, response, body) {
		if(!err && response.statusCode === 200) {
			var beerResults = (JSON.parse(body));
			var beerObjects = beerResults.data;			
			beerObjects.forEach(function(potentialBeers) {
				var beersOnly = {};
				if (potentialBeers.type === 'beer') {
			  	beersOnly.name  = potentialBeers.name;
			  	beersOnly.abv	  = potentialBeers.abv;
				 	beersList.push(beersOnly);
					theBeer = beersList[0];
				} 	
			});
			responseObject.json(theBeer);
		} else {
			console.log
		}
		console.log('beersList', beersList);	
	});	
	return beersList;
};

app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});

