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
	requestName			 = requestQuery.name;
	beerQuery	       = requestName.split(' ').join('+');
	beerChoice(response);
});

app.get('/stages', function(request, response) {
	response.status(200).json(allStages);
});

app.post('/rounds', parseUrlencoded, function(request, response) {
	var newRound = request.body;
	response.status(201).json(newRound);
});

app.get('/booze', function(request, response) {
	response.status(200).json();
});

app.post('/booze', parseUrlencoded, function(request, response) {});

app.delete('/booze', function(request, response) {});

app.get('/queries', function(request, response) {
	response.status(200).json();
});

allBeers  = [{name: "Light", abv: 4, img: "images/bottle.png", ounces: 12},
		{name: "Standard", abv: 5, img: "images/bottle.png", ounces: 12},
		{name: "Strong", abv: 7, "img": "images/bottle.png", ounces: 12},
		{name: "Stronger", abv: 10, "img": "images/bottle.png", ounces: 12}];

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

allStages = [
	{name: "stage-zero", description: "No significant trace of alcohol in your blood", color: "stage-color-zero", stage: 0},
	{name: "stage-one", description: "No loss of coordination, slight euphoria and loss of shyness. Mildly relaxed and maybe a little lightheaded", color: "stage-color-one", stage: 1},
	{name: "stage-two", description: "Some minor impairment of reasoning and memory, lowering of caution. Your behavior may become exaggerated and emotions intensified (Good emotions are better, bad emotions are worse)", color: "stage-color-one", stage: 2},
	{name: "stage-three", description: "Slight impairment of balance, speech, vision, reaction time, and hearing. Judgment and self-control are reduced, and caution, reason and memory are impaired, .08 is legally impaired and it is illegal to drive at this level. You probably believe that you are functioning better than you really are", color: "stage-color-two", stage: 3},
	{name: "stage-four", description: "Significant impairment of motor coordination and loss of good judgment. Speech may be slurred; balance, vision, reaction time and hearing will be impaired", color: "stage-color-two", stage: 4},
	{name: "stage-five", description: "Significant impairment of motor coordination and loss of good judgment. Speech may be slurred; balance, vision, reaction time and hearing will be impaired", color: "stage-color-three", stage: 5},
	{name: "stage-six", description: "Gross motor impairment and lack of physical control. Blurred vision and major loss of balance. Euphoria is reduced and dysphoria (anxiety, restlessness) is beginning to appear. Judgment and perception are severely impaired", color: "stage-color-three", stage: 6},
	{name: "stage-seven", description: "Dysphoria predominates, nausea may appear. The drinker has the appearance of a 'sloppy drunk'", color: "stage-color-four", stage: 7},
	{name: "stage-eight", description: "Feeling dazed, confused or otherwise disoriented. May need help to stand or walk. If you injure yourself you may not feel the pain. Some people experience nausea and vomiting at this level. The gag reflex is impaired and you can choke if you do vomit. Blackouts are likely at this level so you may not remember what has happened", color: "stage-color-four", stage: 8},
	{name: "stage-nine", description: "You have little comprehension of where you are. You may pass out suddenly and be difficult to awaken. Coma is possible. This is the level of surgical anesthesia", color: "stage-color-five", stage: 9},
	{name: "stage-ten", description: "Onset of coma, probable death due to respitory arrest", color: "stage-color-five", stage: 10}]

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

