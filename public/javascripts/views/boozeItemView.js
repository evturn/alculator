var BoozeItemView = Backbone.View.extend({
	className: 'col-xs-4 align drink-space booze-item',
	template: _.template($('#booze-item-view-template').html()),
	events: {
		'click .destroy': 'destroy'
	},
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render: function() {
		var newBooze = this.model.toJSON();
		this.$el.html(this.template(newBooze));
		return this;
	},
	destroy: function() {
		this.model.destroy();
	}
});

console.log('BoozeItemView');