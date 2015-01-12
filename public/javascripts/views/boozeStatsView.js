var BoozeStatsView = Backbone.View.extend({
	el: '#booze-stats',
	template: _.template($('#booze-stats-view-template').html()),
	initialize: function() {
		this.listenTo(boozeItems, 'add', this.addOne);
    this.listenTo(boozeItems, 'reset', this.addAll);

	},
	addAll: function() {
    this.$('#booze-list').html('');
    boozelist.each(this.addOne, this);
  },
	render: function() {
		// var completed = boozeList.completed().length;
		this.$el.html(this.template());
	}
});

console.log('BoozeStatsView');