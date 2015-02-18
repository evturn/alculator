var NavView = Backbone.View.extend({
	el: '#nav',
	navTemplate: _.template($('#nav-template').html()),
	initialize: function() {
		this.instantiateCollections();
		this.fetchCollections();
		this.render();
		this.renderApp();
	},
	events: {
		'click #beer-tab'  : 'setBeerItems',
		'click #liquor-tab': 'setLiquorItems',
		'click #wine-tab'	 : 'setWineItems'
	},
	renderApp: function() {
		this.setWineItems();
		new UserInputView();
		new BoozeItemsView();
		boozeQueueView = new BoozeQueueView();
	},
	render: function() {
		this.$el.html(this.navTemplate());
		return this;
	},
	setBeerItems: function() {
		new BeerItemsView({collection: beerItems});
		new QueryView();
	},
	setWineItems: function() {
		new WineItemsView({collection: wineItems});
	},
	setLiquorItems: function() {
		new LiquorItemsView({collection: liquorItems});
	},
	instantiateCollections: function() {
		boozeItems = new BoozeItems({reset: true, merge: false});
		beerItems = new BeerItems();
		wineItems = new WineItems();
		liquorItems = new LiquorItems();
		stages = new Stages({reset: true});
	},
	fetchCollections: function() {
		stages.fetch();
		beerItems.fetch({reset: true});
		wineItems.fetch({reset: true});
		liquorItems.fetch({reset: true});
	},
});