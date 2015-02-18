var BoozeQueueView = Backbone.View.extend({
	el: '#tab',
	template: _.template($('#booze-queue-view-template').html()),
	initialize: function() {
		this.listenTo(boozeItems, 'change', this.render);
    this.render();
	},
	render: function() {
		boozeQueue = boozeItems.where({selected: true}).length;
		this.$el.html(this.template());
	}
});