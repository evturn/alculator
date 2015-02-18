var QueryView = Backbone.View.extend({
	el: '#search-query',
	template: _.template($("#search-query-template").html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .beer-item': 'logSelection',
		'click #beer-tab': 'render',
		'submit #beer-search': 'fetchQueryResult'
	},
	render: function() {
		this.$el.html(this.template());
    return this;
	},
	logSelection: function(e) {
		e.preventDefault();
		console.log('boozeItems', boozeItems);
	},
	fetchQueryResult: function() {
		searchValue = $('#beer-query').val();
		$.ajax({
			url: '/search',
			method: 'GET',
			data: {
				name: searchValue
			},
			dataType: 'JSON',
			success: function(data) {
				query = new Query(data);
				var view = new SearchResultsView({model: query});
			}
		});
	},
});

