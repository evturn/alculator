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


http.createServer(function(req,res) { 
	var url_parts = url.parse(req.url, true); 
	beerQuery = url_parts.query; 
	console.log(beerQuery); 
});



	var target = 'http://api.brewerydb.com/v2/search?q=' + beerQuery + '&key=' + process.env.BREWERY_DB_KEY;
	var beersList = []
request(target, function(err, response, body) {
	if(!err && response.statusCode === 200) {
			var beerResults = (JSON.parse(body));
			// console.log(foundBeer);	
			var beerObjects = beerResults.data;
			// console.log(beerObjects[0]);
			beerObjects.forEach(function(potentialBeers) {
				beersOnly = {};
				if (potentialBeers.type === 'beer') {
			  	beersOnly.name  = potentialBeers.name;
			  	beersOnly.abv	  = potentialBeers.abv;
			 		beersList.push(beersOnly)
			 		yourBeer = beersList[0];
				}
			})
	}
});

// var grabBeer = function(beerQuery, success, error) {
// };

// var searchTerm = {name:req.query}


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