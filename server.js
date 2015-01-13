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

app.post('/rounds', parseUrlencoded, function(request, response) {
	var newRound = request.body;
	response.status(201).json(newRound);
});

seedData = [{name: "Tequila", abv: 40, img: "images/bottle-champagne.png", ounces: 25},
		{name: "Urine", abv: 40, img: "images/bottle-champagne.png", ounces: 25},
		{name: "Blood", abv: 40, img: "images/bottle-champagne.png", ounces: 25},
		{name: "Poop", abv: 40, img: "images/bottle-champagne.png", ounces: 25},];

app.get('/booze', function(request, response) {
	response.status(200).json();
});

app.post('/booze', parseUrlencoded, function(request, response) {});

app.delete('/booze', function(request, response) {});

allBeers  = [{name: "Light Beer", abv: 4, img: "images/bottle.png", ounces: 12},
		{name: "Standard Beer", abv: 5, img: "images/bottle.png", ounces: 12},
		{name: "Strong Beer", abv: 7, "img": "images/bottle.png", ounces: 12}];

allLiquor = [{name: "shot", abv: 40, img: "images/shot.png", ounces: 1.5},
		{name: "Lowball", abv: 40, img: "images/low.png", ounces: 7},
		{name: "Highball", abv: 40, img: "images/high.png", ounces: 8},
		{name: "Cocktail", abv: 45, img: "images/cocktail.png", ounces: 5},
		{name: "Margarita", abv: 37, img: "images/margarita.png", ounces: 9},
		{name: "Cordial", abv: 20, img: "images/cordial.png", ounces: 2}];

allWine		= [{name: "Red (Glass)", abv: 13, img: "images/redglass.png", ounces: 5},
		{name: "White (Glass)", abv: 12.5, img: "images/whiteglass.png", ounces: 5},
		{name: "Champagne (Flute)", abv: 12, img: "images/champagneglass.png", ounces: 5.5},
		{name: "Red (Bottle)", abv: 13, img: "images/bottle-red.png", ounces: 25},
		{name: "White (Bottle)", abv: 12.5, img: "images/bottle-white.png", ounces: 25},
		{name: "Champagne (Bottle)", abv: 12, img: "images/bottle-champagne.png", ounces: 25}]

app.get('/beers', function(request, response) {
	response.status(200).json(allBeers);
});

app.get('/liquor', function(request, response) {
	response.status(200).json(allLiquor);
});

app.get('/wine', function(request, response) {
	response.status(200).json(allWine);
});

app.get('/search', function(request, response) {	
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
		console.log('beersList', beersList);	
	});	
	return beersList;
};

app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});

