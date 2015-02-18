var AppView = Backbone.View.extend({
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
	render: function() {
		this.$el.html(this.navTemplate());
		return this;
	},
	renderApp: function() {
		this.setWineItems();
		stages.fetch();
	},
	setBeerItems: function() {
		$('#beer-tab').parent().find('li.active').removeClass('active');
		$('#beer-tab').addClass('active');
		beerItems.fetch({reset: true});
		new QueryView();
	},
	setWineItems: function() {
		$('#wine-tab').parent().find('li.active').removeClass('active');
		$('#wine-tab').addClass('active');
		wineItems.fetch({reset: true});
		$('#search-query').empty();
	},
	setLiquorItems: function() {
		$('#liquor-tab').parent().find('li.active').removeClass('active');
		$('#liquor-tab').addClass('active');
		liquorItems.fetch({reset: true});
		$('#search-query').empty();
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