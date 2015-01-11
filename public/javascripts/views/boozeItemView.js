var BoozeItemView = Backbone.View.extend({
	tagName: 'div',
	template: _.template('<h4>' + '<input type=checkbox ' + '<% if (status === "complete") print("checked") %>/>' + '<%= name%></h4>' + '<h4><%= abv %></h4>' + '<img src="<%= img %>">'),
	id: 'booze-view',
	className: 'booze',
	events: {
		'click h4': 'alertStatus',
		'change input': 'toggleStatus'
	},
	toggleStatus: function() {
		if (this.model.get('status') === 'incomplete') {
			this.mode.set({'status': 'complete'});
		} else {
			this.model.set({'status': 'incomplete'});
		}
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