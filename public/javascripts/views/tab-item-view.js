var TabItemView = Backbone.View.extend({
	tagName: 'li',
	tabTemplate: _.template($('#tab-item-template').html()),
	events: {
		'click img': 'destroy',
	},
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'add', this.save);
	},
	render: function() {
		this.$el.html(this.tabTemplate(this.model.toJSON()));
		return this;
	},
	destroy: function() {
		this.model.destroy();
		tabListView.counter();
	},
});

