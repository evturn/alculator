var BacResults = Backbone.View.extend({
	el: '#results',
	resultsTemplate: _.template($('#results-template').html()),
	initialize: function() {
		outcomes = new Outcomes({reset: true});
		outcomes.fetch();
		this.diagnosis();
	},
	render: function() {
		this.$el.html(this.resultsTemplate(this.model.toJSON()));
		return this;
	},
	diagnosis: function(){
		var bac = this.model.get('bac');
		if (bac < 0.02) {
					
			} else if (bac < 0.04) {
				
				
			} else if (bac < 0.06) {
				
				
			} else if (bac < 0.07) {
				
				
			} else if (bac < 0.10) {
				
				
			} else if (bac < 0.13) {
				
				
			} else if (bac < 0.16) {
				
				
			} else if (bac < 0.20) {
				
				
			} else if (bac < 0.25) {
				
				
			} else if (bac < 0.30) {
				
				
			} else if (bac >= 0.30) {
				
				
			} else {
				alert('You sure you entered all your info?');
			}
	},
	}
});