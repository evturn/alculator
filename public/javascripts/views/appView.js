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
		beers = new Beers();
		wineItems = new WineItems();
		liquorItems = new LiquorItems();
		stages = new Stages({reset: true});
	},
	instantiateViews: function() {
		new BeveragesListView({collection: beers});
		new WineItemsView({collection: wineItems});
		new LiquorItemsView({collection: liquorItems});
		new UserInputView();
		new BoozeItemsView();
		boozeQueueView = new BoozeQueueView();
		this.setWineItems();
	},
	rotateBeer: function() {
		setTimeout(function(){ 
			this.setBeerItems();
			this.rotateLiquor();
		}.bind(this), 3000);
	},
	rotateLiquor: function() {
		setTimeout(function(){ 
			this.setLiquorItems();
			this.rotateWine();
		}.bind(this), 2000);
	},
	rotateWine: function() {
		setTimeout(function(){ 
			this.setWineItems();
		}.bind(this), 2000);
	},
});