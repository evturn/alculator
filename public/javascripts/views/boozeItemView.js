var BoozeItemView = Backbone.View.extend({
	el: $('#booze'),
	template: _.template('<h3 class="<%+ status %>">' + '<input type=checkbox ' + '<% if (status === "complete") print("checked") %>/>' + '<%= name%></h3>' + '<h4><%= abv %></h4>' + '<img class="fit-wine" src="<%= img %>">'),
	id: 'booze-view',
	className: 'booze',
	events: {
		'change input': 'toggleStatus'
	},
	toggleStatus: function() {
		this.model.toggleStatus();
		this.render();
	},
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	}
});

console.log('BoozeItemView');