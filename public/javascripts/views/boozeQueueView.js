var BoozeQueueView = Backbone.View.extend({
	el: '#tab',
	template: _.template($('#booze-queue-view-template').html()),
	initialize: function() {
		this.listenTo(this.collection, 'change', this.render);
    this.render();
	},
	render: function() {
		boozeQueue = this.collection.where({selected: true}).length;
		this.$el.html(this.template());
	}
});