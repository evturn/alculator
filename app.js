var express = require('express');
var app = express();

app.use(express.static('public'));

var logger = require('./logger');

app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});