var express 				= require('express');
var app 						= express();
var bodyParser 			= require('body-parser');
var ejs 						= require('ejs');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var logger 					= require('./logger');
app.use(logger);
var request 				= require('request');


app.use(express.static('public'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

app.get('/', function(require, response) {
	response.render('layout');
});

app.get('/beers', function(request, response) {
	response.status(200).json(beers);
});

app.get('/liquor', function(request, response) {
	response.status(200).json(liquor);
});

app.get('/wine', function(request, response) {
	response.status(200).json(wine);
});

app.get('/outcomes', function(request, response) {
	response.status(200).json(outcomes);
});

app.get('/tab', function(request, response) {
	response.status(200).json();
});

app.post('/tab', parseUrlencoded, function(request, response) {});

app.delete('/tab', function(request, response) {});


var beers  = [
	{name: "Light", abv: 4, img: "images/bottle.png", ounces: 12},
	{name: "Standard", abv: 5, img: "images/bottle.png", ounces: 12},
	{name: "Strong", abv: 7, "img": "images/bottle.png", ounces: 12},
	{name: "Stronger", abv: 10, "img": "images/bottle.png", ounces: 12}
];

var liquor = [
	{name: "shot", abv: 40, img: "images/shot.png", ounces: 1.5},
	{name: "Lowball", abv: 40, img: "images/low.png", ounces: 7},
	{name: "Highball", abv: 40, img: "images/high.png", ounces: 8},
	{name: "Cocktail", abv: 45, img: "images/cocktail.png", ounces: 5},
	{name: "Margarita", abv: 10, img: "images/margarita.png", ounces: 9},
	{name: "Cordial", abv: 20, img: "images/cordial.png", ounces: 2}
];

var wine		= [
	{name: "Red", abv: 13, img: "images/redglass.png", ounces: 5},
	{name: "White", abv: 12.5, img: "images/whiteglass.png", ounces: 5},
	{name: "Champagne", abv: 12, img: "images/champagneglass.png", ounces: 5.5},
	{name: "Red", abv: 13, img: "images/bottle-red.png", ounces: 25},
	{name: "White", abv: 12.5, img: "images/bottle-white.png", ounces: 25},
	{name: "Champagne", abv: 12, img: "images/bottle-champagne.png", ounces: 25}
];

var outcomes = [
	{name: "stage-zero", description: "No significant trace of alcohol in your blood", color: "zero", id: 0},
	{name: "stage-one", description: "No loss of coordination, slight euphoria and loss of shyness. Mildly relaxed and maybe a little lightheaded", color: "one", id: 1},
	{name: "stage-two", description: "Some minor impairment of reasoning and memory, lowering of caution. Your behavior may become exaggerated and emotions intensified (Good emotions are better, bad emotions are worse)", color: "one", id: 2},
	{name: "stage-three", description: "Slight impairment of balance, speech, vision, reaction time, and hearing. Judgment and self-control are reduced, and caution, reason and memory are impaired, .08 is legally impaired and it is illegal to drive at this level. You probably believe that you are functioning better than you really are", color: "two", id: 3},
	{name: "stage-four", description: "Significant impairment of motor coordination and loss of good judgment. Speech may be slurred; balance, vision, reaction time and hearing will be impaired", color: "two", id: 4},
	{name: "stage-five", description: "Significant impairment of motor coordination and loss of good judgment. Speech may be slurred; balance, vision, reaction time and hearing will be impaired", color: "three", id: 5},
	{name: "stage-six", description: "Gross motor impairment and lack of physical control. Blurred vision and major loss of balance. Euphoria is reduced and dysphoria (anxiety, restlessness) is beginning to appear. Judgment and perception are severely impaired", color: "three", id: 6},
	{name: "stage-seven", description: "Dysphoria predominates, nausea may appear. The drinker has the appearance of a 'sloppy drunk'", color: "four", id: 7},
	{name: "stage-eight", description: "Feeling dazed, confused or otherwise disoriented. May need help to stand or walk. If you injure yourself you may not feel the pain. Some people experience nausea and vomiting at this level. The gag reflex is impaired and you can choke if you do vomit. Blackouts are likely at this level so you may not remember what has happened", color: "four", id: 8},
	{name: "stage-nine", description: "You have little comprehension of where you are. You may pass out suddenly and be difficult to awaken. Coma is possible. This is the level of surgical anesthesia", color: "five", id: 9},
	{name: "stage-ten", description: "Onset of coma, probable death due to respitory arrest", color: "five", id: 10}
];

app.listen(3000, function() {
	console.log('Server running on localhost:3000 \n');
});

