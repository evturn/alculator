var BacResults = Backbone.View.extend({
	el: '#results',
	resultsTemplate: _.template($('#results-template').html()),
	initialize: function() {
		var bac = this.model.get('bac');
		this.diagnosis(bac);
	},
	events: {
		'click .modal-btn' : 'reset'
	},
	render: function(model) {
		var outcome = model.toJSON();
		this.$el.html(this.resultsTemplate(outcome));
		return this;
	},
	diagnosis: function(bac){
		var i;
		switch (true) {
			case (bac < 0.02): i = 0;
			break
			case (bac < 0.04): i = 1;
			break
			case (bac < 0.06): i = 2;
			break
			case (bac < 0.07): i = 3;
			break
			case (bac < 0.10): i = 4;
			break
			case (bac < 0.13): i = 5;
			break
			case (bac < 0.16): i = 6;
			break
			case (bac < 0.20): i = 7;
			break
			case (bac < 0.25): i = 8;
			break
			case (bac < 0.30): i = 9;
			break
			case (bac >= 0.30): i = 10;
			break
			default: alert('You sure you entered all your info?');
			}

		console.log('bac', bac, 'i', i);
		this.description(i, bac);	
	},
	description: function(id, bac) {
		var result = outcomes.models[id];
		var outcome = result.set({bac: bac});
		this.render(outcome);
	},
	reset: function() {
		userTab  			= new Tab({reset: true, merge: false});
		tabListView 	= new TabListView({collection: userTab});
		userTab.length = 0;
		$('#tab-list').empty()
		var alculator = new Navbar();
	}
});