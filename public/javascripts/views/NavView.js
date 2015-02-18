var NavView = Backbone.View.extend({
	el: '#nav',
	navTemplate: _.template($('#nav-template').html()),
	initialize: function() {
		this.instantiateCollections();
		this.instantiateViews();
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
		stages.fetch();
	},
	render: function() {
		this.$el.html(this.navTemplate());
		return this;
	},
	setBeerItems: function() {
		beerItems.fetch({reset: true});
		new QueryView();
	},
	setWineItems: function() {
		wineItems.fetch({reset: true});
	},
	setLiquorItems: function() {
		liquorItems.fetch({reset: true});
	},
	instantiateCollections: function() {
		boozeItems = new BoozeItems({reset: true, merge: false});
		beerItems = new BeerItems();
		wineItems = new WineItems();
		liquorItems = new LiquorItems();
		stages = new Stages({reset: true});
	},
	instantiateViews: function() {
		new BeerItemsView({collection: beerItems});
		new WineItemsView({collection: wineItems});
		new LiquorItemsView({collection: liquorItems});
		new UserInputView();
		new BoozeItemsView();
		new BoozeQueueView();
	},
});