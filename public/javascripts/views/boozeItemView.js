var BoozeItemView = Backbone.View.extend({
	className: 'col-xs-12 align drink-space booze-item',
	template: _.template($('#booze-item-view-template').html()),
	render: function() {
		var newBooze = this.model.toJSON();
		this.$el.append(this.template(newBooze));
		return this;
	},
});

console.log('BoozeItemView');