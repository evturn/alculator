var UserInput = Backbone.View.extend({
	el: '#user-input',
	template: _.template($('#user-input-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #bac-btn'   		: 'calculate',
		'keypress #user-form' : 'submit'
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	submit: function(e) {
	  if (e.which === ENTER_KEY) {
	    this.calculate();
	  }
	},
	calculate: function(e) {
		e.preventDefault();
		var total = userTab.length;
		var abvs  = [];
		var ozs 	= [];

		userTab.each(function(model) {
			var abv 	 = model.get('abv');
			var ounces = model.get('ounces');

			abvs.push(abv);
			ozs.push(ounces);
		});

		var abvSum = abvs.reduce(function(a, b) {return a + b});
		var ozSum = ozs.reduce(function(a, b) {return a + b});

	 	var lbs		= parseInt($('#lbs').val());
		var hours = parseInt($('#hours').val());		
		var sex 	= $('#male').val();
	 	var rate  = sex === 'male' ? 0.73 : 0.66;

  	var abvAverage  	= abvSum / total;
	 	var ethanolOz 		= ozSum * (abvAverage * 0.01);
	 	var metricOz	  	= (ethanolOz * 5.14).toFixed(2);
		var metabolism 		= lbs * rate;
		var subTotal 			= (metricOz /  metabolism).toFixed(2);
		var soberingRate  = 0.015 * hours;
		var bac 			    = (subTotal - soberingRate).toFixed(2);

		var round     = new Round({bac: bac});
		var roundView = new RoundView({model: round});
	},
	
});

