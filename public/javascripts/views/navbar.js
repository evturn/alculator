var Navbar = Backbone.View.extend({
	el: '#nav',
	navTemplate: _.template($('#nav-template').html()),
	initialize: function() {
		this.instantiateCollections();
		this.instantiateViews();
		this.render();
	},
	events: {
		'click #beverage-nav' : 'activeNav',
		'click #beer-tab'     : 'showBeers',
		'click #wine-tab'	 		: 'showWine',
		'click #liquor-tab'		: 'showLiquor'
	},
	render: function() {
		this.$el.html(this.navTemplate());
		return this;
	},
	activeNav: function(e) {
		e.preventDefault();
		$('#beverage-nav').find('li.active').removeClass('active');
		$(e.target).closest('li').addClass('active');
	},
	showBeers: function() {
		beers.fetch({reset: true});
		var beerList 	 = new BeveragesListView({collection: beers});
	},
	showWine: function() {
		wine.fetch({reset: true});
		var wineList 	 = new BeveragesListView({collection: wine});
	},
	showLiquor: function() {
		liquor.fetch({reset: true});
		var liquorList = new BeveragesListView({collection: liquor});
	},
	instantiateCollections: function() {
		boozeItems  = new Tab({reset: true, merge: false});
		beers 		 	= new Beers();
		wine 				= new Wine();
		liquor      = new Liquor();
		stages 			= new Stages({reset: true});
		stages.fetch();
	},
	instantiateViews: function() {
		new UserInputView();
		new BoozeItemsView();
		boozeQueueView = new BoozeQueueView();
	},
});