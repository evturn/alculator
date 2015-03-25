var BeverageView = Backbone.View.extend({
	tagName: 'li',
	className: 'beverage-item',
	template: _.template($('#beverage-template').html()),
	initialize: function() {
		userTab  		= new Tab({reset: true, merge: false});
		userTab.pop();
		tabListView = new TabListView({collection: userTab});
		this.render();
	},
	events: {
		'click .beverage-image': 'select'
	},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
	select: function() {
		var selection = new Beverage(this.model.attributes);
		selection.set({selected: true});
		userTab.push(selection);
		selection.save();
	},
});


