var TabItemView = Backbone.View.extend({
	el: '#booze-items',
	tagName: 'li',
	className: 'beverage-item',
	template: _.template($('#tab-item-template').html()),
	events: {
		'click img': 'destroy'
	},
	initialize: function() {
		this.render();
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	},
	destroy: function() {
		this.model.destroy();
		this.render()
	}
});

