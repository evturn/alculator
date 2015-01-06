var express = require('express');
var app = express();
var bodyParser = require('body-parder');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var logger = require('./logger');
  app.use(logger);

app.use(express.static('public'));

app.get('/', function(require, response) {
	response.render('index.html');
});



app.get('/api', function( request, response) {
    response.send('API is running');
});




app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});