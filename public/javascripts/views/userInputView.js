var UserInputView = Backbone.View.extend({
	el: '#user-input',
	template: _.template($('#user-input-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #bac-submit-btn' : 'collectBooze',
		'keypress #lbs'					: 'collectBoozeOnEnter',
		'keypress #hours'				: 'collectBoozeOnEnter',
		'keypress #male'				: 'collectBoozeOnEnter',
		'keypress #female'			: 'collectBoozeOnEnter'
	},
	render: function() {
		this.$el.prepend(this.template());
	},
	collectBoozeOnEnter: function(e) {
	  if (e.which === ENTER_KEY) {
	  	console.log('we here');
	    this.collectBooze();
	  }
	},
	collectBooze: function() {
		$('html, body').animate({
			 scrollTop: 0
			}, 'slow');
		abvArray    = [];
		ouncesArray = [];
		boozeItems.shift();
		boozeItems.forEach(function(model) {
		 	drink = {abv: model.get('abv'),
		 		ounces: model.get('ounces')};
			abvArray.push(drink.abv);
			ouncesArray.push(drink.ounces);
		});
		this.consolidateBooze();
	},
	consolidateBooze: function() {
    fluidOunces = ouncesArray.reduce(function(prev, cur) {
    	return prev + cur;
  	});
  	totalDrinks = abvArray.length;
		abvSum 			= abvArray.reduce(function(prev, cur) {
    	return prev + cur;
  	});	
  	this.collectUserInfo();
	},
	collectUserInfo: function() {
	 	lbs		= parseInt(document.getElementById('lbs').value);
		hours = parseInt(document.getElementById('hours').value);		
		radio = document.getElementById('male').value;
		sex 	=	radio.toLowerCase();
	 	rate  = sex === 'male' ? 0.73 : 0.66;
	 	this.calculate();
	},
	calculate: function() {
  	var pureAbv 			= abvSum / totalDrinks;
	 	var ethanolOunces = fluidOunces * (pureAbv * 0.01);
	 	var metricOunces  = (ethanolOunces * 5.14).toFixed(2);
		var metabolism 	 	= lbs * rate;
		var subLevel 		 	= (metricOunces /  metabolism).toFixed(2);
		var soberingRate  = 0.015 * hours;
		var bac 			    = (subLevel - soberingRate).toFixed(2);
		var round         = new Round({lbs: lbs, hours: hours, drinks: boozeQueue, abv: abvSum, sex: sex, rate: rate, bac: bac});
		var roundView     = new RoundView({model: round});
	}
});

