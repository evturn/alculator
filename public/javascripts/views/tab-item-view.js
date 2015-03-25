var TabItemView = Backbone.View.extend({
	tagName: 'li',
	className: 'beverage-item',
	template: _.template($('#tab-item-template').html()),
	events: {
		'click img': 'destroy',
	},
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'add', this.save);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	destroy: function() {
		this.model.destroy();
	}
});

