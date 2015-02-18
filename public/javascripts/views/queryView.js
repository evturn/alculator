var QueryView = Backbone.View.extend({
	el: '#search-query',
	template: _.template($("#search-query-template").html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .beer-item': 'logSelection',
		'click #beer-tab': 'render',
		'keypress #beer-query': 'fetchQueryResult'
	},
	render: function() {
		this.$el.html(this.template());
    return this;
	},
	logSelection: function(e) {
		e.preventDefault();
		console.log('boozeItems', boozeItems);
	},
	fetchQueryResult: function(e) {
		if (e.which === ENTER_KEY) {
			searchValue = $('#beer-query').val();
			$.ajax({
				url: '/search',
				method: 'GET',
				data: {
					name: searchValue
				},
				dataType: 'JSON',
				success: function(data) {
					$('#beer-query').val('');
					console.log(data);
					query = new Query(data);
					queries.add(query);
					var view = new SearchResultsView({model: query});
				}
			});
		}
	},
});

