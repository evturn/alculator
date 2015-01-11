var BoozeItemView = Backbone.View.extend({
	el: $('#booze'),
	template: _.template($('#booze-item-view-template').html()),
	id: 'booze-item-view',
	className: 'booze',
	events: {
		'change input': 'toggleStatus'
	},
	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
		this.model.on('hide', this.remove, this);
		this.render();
	},
	toggleStatus: function() {
		this.model.toggleStatus();
	},
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.append(this.template(attributes));
	},
	remove: function() {
		this.$el.remove();
	}
});

console.log('BoozeItemView');