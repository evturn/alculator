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
		apiAbv = parseInt(this.model.get('abv', apiAbv));
		apiName = parseInt(this.model.get('apiName', apiName));
		console.log('apiAbv', apiAbv);
		this.$el.append(this.template(this.model.toJSON()));
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

