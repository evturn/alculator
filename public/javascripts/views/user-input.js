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
		var drinks = userTab.length;
		var abvs  = [];
		var ozs 	= [];
		
		function getSum(array) {
			var sum = array.reduce(function (a, b) {return a + b});
			return sum;
		}
	 	
	 	function bac(abv, oz, lbs, hours, rate) {
	 		var abvAverage 	 = abv / drinks;
	 		var ethanolOz 	 = oz * (abvAverage * 0.01);	
	 		var metricOz	   = (ethanolOz * 5.14).toFixed(2);
			var metabolism 	 = lbs * rate;
			var subTotal 		 = (metricOz /  metabolism).toFixed(2);
			var soberingRate = 0.015 * hours;
			return (subTotal - soberingRate).toFixed(2);
	 	}

	 	function createList(collection){
			collection.each(function(model) {
				var abv 	 = model.get('abv');
				var ounces = model.get('ounces');

				abvs.push(abv);
				ozs.push(ounces);
			});		
	 	}

	 	createList(userTab);
		var abvSum = getSum(abvs);
		var ozSum = getSum(ozs);
	
	 	var lbs		= parseInt($('#lbs').val());
		var hours = parseInt($('#hours').val());
	 	var rate  = $('#male').val() === 'male' ? 0.73 : 0.66;
	 	console.log(rate);

	 	var results = bac(abvSum, ozSum, lbs, hours, rate);


		var product = new Round({bac: results});
		var resultsModel = new Results({model: product});
	},
	
});

