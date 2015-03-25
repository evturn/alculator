var Navbar = Backbone.View.extend({
	el: '#nav',
	navTemplate: _.template($('#nav-template').html()),
	initialize: function() {
		this.init();
		this.render();
	},
	events: {
		'click #beverage-nav' : 'active'	
	},
	render: function() {
		this.$el.html(this.navTemplate());
		return this;
	},
	active: function(e) {
		e.preventDefault();
		$('#beverage-nav').find('li.active').removeClass('active');
		$(e.target).closest('li').addClass('active');
		var id = ($('.active').attr('id'));
		this.alternate(id);
	},
	alternate: function(id) {
		if (id === 'beer-tab') {
			collection = new Beers();	
		} else if (id === 'wine-tab') {
			collection = new Wine();
		} else if (id === 'liquor-tab') {
			collection = new Liquor();
		} else {
			collection = new Wine();
		}

		collection.fetch({reset: true});
		var beveragesList = new BeveragesListView({collection: collection});
	},
	init: function() {
		new UserInput();
		this.alternate();
		boozeItems  = new Tab({reset: true, merge: false});
		new BoozeItemsView();
		boozeQueueView = new BoozeQueueView();
		stages 			= new Stages({reset: true});
		stages.fetch();
	},
});