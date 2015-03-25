var Navbar = Backbone.View.extend({
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
		stages.fetch();
	},
	setBeerItems: function() {
		$('#beer-tab').parent().find('li.active').removeClass('active');
		$('#beer-tab').addClass('active');
		beers.fetch({reset: true});
	},
	setWineItems: function() {
		$('#wine-tab').parent().find('li.active').removeClass('active');
		$('#wine-tab').addClass('active');
		wine.fetch({reset: true});
		$('#search-query').empty();
	},
	setLiquorItems: function() {
		$('#liquor-tab').parent().find('li.active').removeClass('active');
		$('#liquor-tab').addClass('active');
		liquorItems.fetch({reset: true});
		$('#search-query').empty();
	},
	instantiateCollections: function() {
		boozeItems  = new BoozeItems({reset: true, merge: false});
		beers 		 	= new Beers();
		wine 				= new Wine();
		liquorItems = new LiquorItems();
		stages 			= new Stages({reset: true});
	},
	instantiateViews: function() {
		var beerList 	 = new BeveragesListView({collection: beers});
		var wineList 	 = new BeveragesListView({collection: wine});
		var liquorList = new BeveragesListView({collection: liquorItems});
		new UserInputView();
		new BoozeItemsView();
		boozeQueueView = new BoozeQueueView();
		this.setWineItems();
	},
});