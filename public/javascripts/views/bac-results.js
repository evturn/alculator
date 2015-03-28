var BacResults = Backbone.View.extend({
	el: '#results',
	resultsTemplate: _.template($('#results-template').html()),
	initialize: function() {
		var bac = this.model.get('bac');
		this.diagnosis(bac);
	},
	render: function(model) {
		var outcome = model.toJSON();
		this.$el.html(this.resultsTemplate(outcome));
		return this;
	},
	diagnosis: function(bac){
		console.log('bac', bac);
		if (bac < 0.02) {
			var i = 0;	
			} else if (bac < 0.04) {
			var i = 1;
			} else if (bac < 0.06) {
			var i = 2;
			} else if (bac < 0.07) {
			var i = 3;
			} else if (bac < 0.10) {
			var i = 4;	
			} else if (bac < 0.13) {
			var i = 5;
			} else if (bac < 0.16) {
			var i = 6;
			} else if (bac < 0.20) {
			var i = 7;
			} else if (bac < 0.25) {
			var i = 8;
			} else if (bac < 0.30) {
			var i = 9;
			} else if (bac >= 0.30) {
			var i = 10;
			} else {
				alert('You sure you entered all your info?');
			}

		this.description(i, bac);	
	},
	description: function(id, bac) {
		var result = outcomes.models[id];
		var outcome = result.set({bac: bac});
		this.render(outcome);
	},
		
});