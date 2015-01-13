var beerItems = new BeerItems();
beerItems.fetch({reset: true});
var boozeItems = new BoozeItems({reset: false});
$(function() {
new AlculatorView();
new BoozeItemsView();
new SearchView();
new BeerItemsView({collection: beerItems});
new BoozeStatsView();
console.log('boozeItems', boozeItems);
// new LiquorItemsView();
// new WineItemsView();

	$('#beer-search').on('submit', function(e) {
		e.preventDefault();
		beerField = $('#beer-query').val();
		$.ajax({
			url: '/search',
			method: 'GET',
			data: {
				name: beerField
			},
			dataType: 'JSON',
			success: function(data) {
				console.log('data', data[0]);
				beer = new Beer(data);
				console.log('beer', beer);
				var view = new BarTabView({model: beer});
			}
		});
	});

	$('#bac-submit-btn').on('click', function(e) {
		e.preventDefault;
		console.log(boozeItems.length); 
		
	});

	$('.beer-item').on('click', function(e) {
		e.preventDefault();
		console.log(boozeItems.models);
		
	});

	// $('#bac-submit-btn').on('click', function(e) {
	// 	e.preventDefault;
	// 	console.log('Heeyutz!');
	// 	$.ajax({
	// 		url: '/rounds',
	// 		method: 'POST',
	// 		data: {
	// 			lbs: parseInt(document.getElementById('lbs').value),
	// 			hours: parseInt(document.getElementById('hours').value),
	// 			drinks: parseInt(document.getElementById('drinks').value),
	// 			abv: parseInt(document.getElementById('abv').value),
	// 			sex: document.getElementById('male').value,
	// 		},
	// 		dataType: 'JSON',
	// 		success: function(data) {
	// 			console.log(data);
	// 			rate          = sex === 'male' ? 0.73 : 0.66;
	// 			bevOz         = data.drinks * 12;
	// 			alcOz 		    = bevOz * (data.abv * 0.01);
	// 			metricOz 		  = alcOz * 5.14;
	// 			metabolism 	  = data.lbs * rate;
	// 			subLevel 		  = metricOz /  metabolism;
	// 			soberingRate  = 0.015 * data.hours;
	// 			bac 			    = (subLevel - soberingRate).toFixed(2);
	// 			console.log(bac);
	// 			var round = new Round({lbs: data.lbs, hours: data.hours, drinks: data.drinks, abv: data.abv, sex: data.sex, rate: rate, bac: bac});
	// 			var roundView = new RoundView({model: round});
	// 				if (bac < 0.02) {
	// 					var stageZero  = new StageZero();
	// 				} else if (bac < 0.04) {
	// 					var stageOne   = new StageOne();
	// 				} else if (bac < 0.06) {
	// 					var stageTwo	 = new StageTwo();
	// 				} else if (bac < 0.07) {
	// 					var stageThree = new StageThree();
	// 				} else if (bac < 0.10) {
	// 					var stageFour  = new StageFour();
	// 				} else if (bac < 0.13) {
	// 					var stageFive	 = new StageFive();
	// 				} else if (bac < 0.16) {
	// 					var stageSix	 = new StageSix();
	// 				} else if (bac < 0.20) {
	// 					var stageSeven = new StageSeven();
	// 				} else if (bac < 0.25) {
	// 					var stageEight = new StageEight();
	// 				} else if (bac < 0.30) {
	// 					var stageNine	 = new StageNine();
	// 				} else if (bac < 0.35) {
	// 					var stageTen 	 = new StageTen();
	// 				} else {
	// 					alert('You sure you entered all your info?');
	// 				}
	// 		},
	// 		error: function() {
	// 			alert('Something went wrong');
	// 		}
	// 	});
 //  })



console.log('Client');

});

// Bac Meter
	(function() {
	  var Needle, arc, arcEndRad, arcStartRad, barWidth, chart, chartInset, degToRad, el, endPadRad, height, margin, needle, numSections, padRad, percToDeg, percToRad, percent, radius, sectionIndx, sectionPerc, startPadRad, svg, totalPercent, width, _i;

	  percent = .90;

	  barWidth = 60;

	  numSections = 5;

	  sectionPerc = 1 / numSections / 2;

	  padRad = 0.05;

	  chartInset = 10;

	  totalPercent = .75;

	  el = d3.select('#bac-meter');

	  margin = {
	    top: 20,
	    right: 20,
	    bottom: 30,
	    left: 20
	  };

	  width = el[0][0].offsetWidth - margin.left - margin.right;

	  height = width;

	  radius = Math.min(width, height) / 2;

	  percToDeg = function(perc) {
	    return perc * 360;
	  };

	  percToRad = function(perc) {
	    return degToRad(percToDeg(perc));
	  };

	  degToRad = function(deg) {
	    return deg * Math.PI / 180;
	  };

	  svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);

	  chart = svg.append('g').attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top) / 2) + ")");

	  for (sectionIndx = _i = 1; 1 <= numSections ? _i <= numSections : _i >= numSections; sectionIndx = 1 <= numSections ? ++_i : --_i) {
	    arcStartRad = percToRad(totalPercent);
	    arcEndRad = arcStartRad + percToRad(sectionPerc);
	    totalPercent += sectionPerc;
	    startPadRad = sectionIndx === 0 ? 0 : padRad / 2;
	    endPadRad = sectionIndx === numSections ? 0 : padRad / 2;
	    arc = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth).startAngle(arcStartRad + startPadRad).endAngle(arcEndRad - endPadRad);
	    chart.append('path').attr('class', "arc chart-color" + sectionIndx).attr('d', arc);
	  }

	  Needle = (function() {
	    function Needle(len, radius) {
	      this.len = len;
	      this.radius = radius;
	    }

	    Needle.prototype.drawOn = function(el, perc) {
	      el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', this.radius);
	      return el.append('path').attr('class', 'needle').attr('d', this.mkCmd(perc));
	    };

	    Needle.prototype.animateOn = function(el, perc) {
	      var self;
	      self = this;
	      return el.transition().delay(500).ease('elastic').duration(3000).selectAll('.needle').tween('progress', function() {
	        return function(percentOfPercent) {
	          var progress;
	          progress = percentOfPercent * perc;
	          return d3.select(this).attr('d', self.mkCmd(progress));
	        };
	      });
	    };

	    Needle.prototype.mkCmd = function(perc) {
	      var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY;
	      thetaRad = percToRad(perc / 2);
	      centerX = 0;
	      centerY = 0;
	      topX = centerX - this.len * Math.cos(thetaRad);
	      topY = centerY - this.len * Math.sin(thetaRad);
	      leftX = centerX - this.radius * Math.cos(thetaRad - Math.PI / 2);
	      leftY = centerY - this.radius * Math.sin(thetaRad - Math.PI / 2);
	      rightX = centerX - this.radius * Math.cos(thetaRad + Math.PI / 2);
	      rightY = centerY - this.radius * Math.sin(thetaRad + Math.PI / 2);
	      return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
	    };

	    return Needle;

	  })();

	  needle = new Needle(90, 15);

	  needle.drawOn(chart, 0);

	  needle.animateOn(chart, percent);
	}).call(this);
