var BoozeItemView = Backbone.View.extend({
	tagName: 'div',
	template: _.template('<h4>' + '<input type=checkbox ' + '<% if (unwanted === true) print("got it") %>/>' + '<%= name%></h4>' + '<h4><%= abv %></h4>' + '<img src="<%= img %>">'),
	id: 'booze-view',
	className: 'booze',
	events: {
		"click h4": "alertStatus"
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