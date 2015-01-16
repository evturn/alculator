var SearchResultItemView = Backbone.View.extend({
	className: 'col-xs-3 align beer-item',
	template: _.template($('#search-result-item-view-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click input': 'addBooze'
	},
	render: function() {
		var newSearchResult = this.model.toJSON();
		console.log('newSearchResult', newSearchResult);
		this.$el.append(this.template(newSearchResult));
		return this;
	},
	addBooze: function(e) {
		e.preventDefault();
		var boozeOnDelivery = new SearchResultItem(this.model.attributes)
		abv = parseInt(boozeOnDelivery.get('abv'))
		boozeOnDelivery.set({selected: true, ounces: 12, img: 'images/bottle-search.png', abv: abv});
		console.log('boozeOnDelivery', boozeOnDelivery)
		boozeItems.add(boozeOnDelivery);
		boozeOnDelivery.save();
	}
});

console.log('SearchResultItemView');

