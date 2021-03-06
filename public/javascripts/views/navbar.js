var Navbar = Backbone.View.extend({
	el: '.container-bar',
	initialize: function() {
		this.init();
		tabListView.counter();
	},
	events: {
		'click .nav-bar-section' : 'active'	
	},
	active: function(e) {
		e.preventDefault();
		var target = $(e.currentTarget);
		var button = target.find('button');
		var id = button.data('id');
		console.log(id);
		$('.active').removeClass('active');
		button.addClass('active');
		this.alternate(id);
	},
	alternate: function(id) {
		var id = id || 2;
		switch (true) {
			case (id === 1): collection = new Liquor();	
			break
			case (id === 2): collection = new Wine();	
			break
			case (id === 3): collection = new Beers();	
			break
		}
		collection.fetch({reset: true});
		var beveragesList = new BeveragesListView({collection: collection});
	},
	init: function() {
		userTab  		= new Tab({reset: true, merge: false});
		userTab.pop();
		tabListView = new TabListView({collection: userTab});
		new UserInput();
		this.alternate();
		outcomes = new Outcomes({reset: true});
		outcomes.fetch();
	},
});