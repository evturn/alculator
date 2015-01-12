var BoozeStatsView = Backbone.View.extend({
	el: '#booze-stats',
	template: _.template($('#booze-stats-view-template').html()),
	initialize: function() {
		this.listenTo(boozeItems, 'add', this.addOne);
    this.listenTo(boozeItems, 'reset', this.addAll);
    this.render();
	},
	addAll: function() {
    this.$('#booze-list').html('');
    boozelist.each(this.addOne, this);
  },
	render: function() {
		completed = 0;
		remaining = 0;
		this.$el.html(this.template());
	}
});

console.log('BoozeStatsView');