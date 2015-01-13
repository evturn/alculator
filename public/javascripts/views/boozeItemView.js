var BoozeItemView = Backbone.View.extend({
	className: 'col-xs-4 align drink-space booze-item',
	template: _.template($('#booze-item-view-template').html()),
	render: function() {
		var boozeAttributes = this.model.toJSON();
		this.$el.append(this.template(boozeAttributes));
		return this;
	},
});

console.log('BoozeItemView');