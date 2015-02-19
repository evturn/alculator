var SearchResultsView = Backbone.View.extend({
	el: '#beverages-list',
	tagName: 'li',
	className: 'beverage-item',
	template: _.template($('#search-results-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .add': 'addBooze'
	},
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	},
	addBooze: function(e) {
		e.preventDefault();
		queryModel = $(e.currentTarget)
		console.log('we sending!', queryModel);
		var boozeOnDelivery = new BoozeItem(this.model.attributes)
		abv = parseInt(boozeOnDelivery.get('abv'))
		boozeOnDelivery.set({selected: true, ounces: 12, img: 'images/bottle-search-result.png', abv: abv});
		boozeItems.add(boozeOnDelivery);
		boozeOnDelivery.save();
	}
});



