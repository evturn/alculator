var BoozeItemView = Backbone.View.extend({
	tagName: 'div',
	template: _.template('<h3>x</h3><h4><%= name%></h4><h4><%= abv %></h4><img src="<%= img %>">'),
	id: 'booze-view',
	className: 'booze',
	events: {
		"click .booze": "alertStatus"
	},
	alertStatus: function(e) {
		alert('You clicked on this h3');
	}
	render: function() {
		var attributes = this.mode.toJSON();
		this.$el.html(this.template(attributes));
	}
});

console.log('BoozeItemView');