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

app.get('/beers', function(request, response) {	
	var requestQuery = request.query;
	beerQuery 			 = requestQuery.name;
	beerChoice(response);
});

// bacStages = [
	// {stage: 0, effect: "No significant trace of alcohol in your blood"},
// 	{stage: 1, effect: "No loss of coordination, slight euphoria and loss of shyness. Mildly relaxed and maybe a little lightheaded"},
// 	{stage: 2, effect: "Some minor impairment of reasoning and memory, lowering of caution. Your behavior may become exaggerated and emotions intensified (Good emotions are better, bad emotions are worse)"},
// 	{stage: 3, effect: "Slight impairment of balance, speech, vision, reaction time, and hearing. Judgment and self-control are reduced, and caution, reason and memory are impaired, .08 is legally impaired and it is illegal to drive at this level. You probably believe that you are functioning better than you really are."}
// ];



app.get('/stages', function(request, response) {
	response.send(bacStages);
});

app.get('/booze', function(request, response) {
	var boozeRequestQuery = request.query;
	boozeQuery			 			= boozeRequestQuery.name;
	console.log('requestQuery', boozeQuery);
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

//JSON file obsolete
// var booze;
// fs.readFile('./liquor.json', 'utf8', function(error, data) {
// 	if (error) throw error;
// 	booze = JSON.parse(data);
// 	console.log('booze', booze);
// });