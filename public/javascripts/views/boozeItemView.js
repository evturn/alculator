var BoozeItemView = Backbone.View.extend({
	el: '#booze-items',
	template: _.template($('#booze-item-view-template').html()),
	render: function() {
		var boozeAttributes = this.model.toJSON();
		this.$el.append(this.template(boozeAttributes));
		return this;
	}
});

console.log('BoozeItemView');