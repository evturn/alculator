var BeverageView = Backbone.View.extend({
	tagName: 'li',
	className: 'beverage-item wow fadeInUp',
	template: _.template($('#beverage-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .img-beverage': 'select'
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


