var BoozeStatsView = Backbone.View.extend({
	el: '#booze-stats',
	template: _.template($('#booze-stats-view-template').html()),
	initialize: function() {
		this.listenTo(boozeItems, 'change', this.render);
    this.render();
	},
	render: function() {
		que = boozeItems.models.length;
		this.$el.html(this.template());
	}
});

console.log('BoozeStatsView');