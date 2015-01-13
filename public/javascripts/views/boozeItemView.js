var BoozeItemView = Backbone.View.extend({
	className: 'col-xs-4 align drink-space booze-item',
	template: _.template($('#booze-item-view-template').html()),
	events: {
		'click .destroy': 'destroy',
	},
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'add', this.save);
	},
	render: function() {
		var boozeOnArrival = this.model.set({url: '/booze'});
		console.log('boozeOnArrival', boozeOnArrival);
		var newBooze = this.model.toJSON();
		this.$el.html(this.template(newBooze));
		return this;
	},
	destroy: function() {
		this.model.destroy();
		boozeStatsView.render()
	}
});

console.log('BoozeItemView');