var UserInput = Backbone.View.extend({
	el: '#user-input',
	template: _.template($('#user-input-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #bac-btn'   		: 'checkout',
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
	checkout: function(e) {
		e.preventDefault();
		var abvs  		 = [];
		var ozs 	     = [];
		
		var Drinker = function(){
	 		this.lbs	  = parseInt($('#lbs').val());
			this.hours  = parseInt($('#hours').val());
	 		this.rate   = $('#male').val() === 'male' ? 0.73 : 0.66;
		  this.drinks = userTab.length;
	 		this.abv 		= getSum(abvs);
	 		this.ounces = getSum(ozs);
	 		this.calculate = function() {
		 		var abvAverage 	 = this.abv / this.drinks;
		 		var ethanol 	 	 = this.ounces * (abvAverage * 0.01);	
		 		var metricOz	   = (ethanol * 5.14).toFixed(2);
				var metabolism 	 = this.lbs * this.rate;
				var subTotal 		 = (metricOz /  metabolism).toFixed(2);
				var soberingRate = 0.015 * this.hours;
				var bac 	  		 = (subTotal - soberingRate).toFixed(2);
				return bac;
	 		}
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

		var user = newDrinker(userTab);
		var bac  = user.calculate();
	 	
		var bacData = new Outcome({bac: bac});
		var results = new BacResults({model: bacData});
	},
});

