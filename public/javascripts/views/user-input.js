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
		var abvs  		 = [];
		var ozs 	     = [];
		
		function Drinker() {
	 		this.lbs	  = parseInt($('#lbs').val());
			this.hours  = parseInt($('#hours').val());
	 		this.rate   = $('#male').val() === 'male' ? 0.73 : 0.66;
		  this.drinks = userTab.length;
	 		this.abv 		= getSum(abvs);
	 		this.ounces = getSum(ozs);
		}

		function getSum(array) {
			var sum = array.reduce(function (a, b) {return a + b});
			return sum;
		}
	 	
	 	function newDrinker(collection){

			collection.each(function(model) {
				var abv 	 = model.get('abv');
				var ounces = model.get('ounces');

				abvs.push(abv);
				ozs.push(ounces);
			});	

			var drinker = new Drinker();
	 		return drinker;
	 		
	 	}

		function bac(drinker) {
	 		var abvAverage 	 = drinker.abv / drinker.drinks;
	 		var ethanol 	 	 = drinker.ounces * (abvAverage * 0.01);	
	 		var metricOz	   = (ethanol * 5.14).toFixed(2);
			var metabolism 	 = drinker.lbs * drinker.rate;
			var subTotal 		 = (metricOz /  metabolism).toFixed(2);
			var soberingRate = 0.015 * drinker.hours;
			var bac 	  		 = (subTotal - soberingRate).toFixed(2);
			drinker.bac      = bac; 
			return drinker;
 		}
		var user = newDrinker(userTab);
		var bac = bac(user);
		console.log(bac);
	 	


	 	

		// var product 		 = new Result({bac: results});
		// var resultsModel = new Results({model: product});
	},
});

