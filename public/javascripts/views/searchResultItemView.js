var SearchResultItemView = Backbone.View.extend({
	el: $('#search-results'),
	template: _.template($('#search-results-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click input': 'addBooze'
	},
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	},
	addBooze: function(e) {
		e.preventDefault();
		var boozeOnDelivery = new BoozeItem(this.model.attributes)
		abv = parseInt(boozeOnDelivery.get('abv'))
		boozeOnDelivery.set({selected: true, ounces: 12, img: 'images/bottle-search.png', abv: abv});
		console.log('boozeOnDelivery', boozeOnDelivery)
		boozeItems.add(boozeOnDelivery);
		boozeOnDelivery.save();
	}
});

console.log('SearchResultItemView');

