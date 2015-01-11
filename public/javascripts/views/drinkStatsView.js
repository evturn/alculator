var DrinkStatsView = Backbone.View.extend({
	el: '#booze-stats',
	template: _.template($('#drink-stats-view-template').html()),
	initialize: function() {
		this.listenTo(boozeList, 'add', this.addOne);
    this.listenTo(boozeList, 'reset', this.addAll);

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

console.log('DrinkStatsView');