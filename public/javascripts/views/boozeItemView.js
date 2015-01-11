var BoozeItemView = Backbone.View.extend({
	el: $('#booze-list'),
	tagName: 'li',
	template: _.template($('#booze-item-view-template').html()),
	className: 'booze',
	events: {
		'click .destroy': 'clear',
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
		
		this.render();
	},
	toggleStatus: function() {
		this.model.toggleStatus();
	},
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.append(this.template(attributes));
	},
	remove: function() {
		this.$el.remove();
	},
	clear: function() {
    this.model.destroy();
  }
});

console.log('BoozeItemView');