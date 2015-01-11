var DrinkStatsView = Backbone.View.extend({
	el: '#booze',
	template: _.template($('#drink-stats-view-template').html());
	initialize: function() {
		this.listenTo(boozeList, 'add', this.addOne);
    this.listenTo(boozeList, 'reset', this.addAll);
	},
	render: function() {
		var completed = boozeList.completed().length;
	}
});

console.log('DrinkStatsView');