var BoozeItemView = Backbone.View.extend({
	el: $('#booze'),
	template: _.template($('#booze-item-template')),
	initialize: function() {
		this.model.on('hide', this.remove, this);
	},
	render: function() {
		this.$el.html(this.template())
	}
});

console.log('BoozeItemView');