var express 				= require('express');
var app 						= express();
var bodyParser 			= require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var logger 					= require('./logger');
  app.use(logger);
var request 				= require('request');
var url 						= require('url');
var http 						= require('http');
var promise 				= require('express-promise');
var async						= require('async');

app.use(express.static('public'));
app.use(require('express-promise')());


app.get('/beers', function(request, response) {	
	var requestQuery = request.query;
	beerQuery 			 = requestQuery.name;
	beerChoice(response);
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
		// console.log('success 3', success);
		console.log('beersList', beersList);
		// console.log('theBeer', theBeer);
	});	
	return beersList;
	// console.log('success 4', success);
};

app.get('/', function(require, response) {
	response.render('index.html');
});

var rounds = {}
app.post('/rounds', parseUrlencoded, function(request, response) {
	var newRound = request.body;
	response.status(201).json(newRound);
});

app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});