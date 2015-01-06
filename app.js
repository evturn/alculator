var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var logger = require('./logger');
  app.use(logger);

app.use(express.static('public'));

app.get('/', function(require, response) {
	response.render('index.html');
});


var rounds = {}

app.post('/rounds', parseUrlencoded, function(request, response) {
	var newRound = request.body;
	response.status(201).json(newRound);
});



app.get('/api', function( request, response) {
    response.send('API is running');
});


app.get('/beers', function(response, request) {
	response.send('id: [BREWERY_DB_KEY]', request.query)
})

app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});