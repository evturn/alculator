var BoozeItemView = Backbone.View.extend({
	tagName: 'li',
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
		var newBooze = this.model.toJSON();
		this.$el.html(this.template(newBooze));
		return this;
	},
	destroy: function() {
		this.model.destroy();
		boozeQueueView.render()
	}
});

