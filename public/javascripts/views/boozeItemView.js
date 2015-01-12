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
	render: function() {
		var boozeAttributes = this.model.toJSON();
		this.$el.append(this.template(boozeAttributes));
		return this;
	},
	clear: function() {
    this.model.destroy();
  }
});

console.log('BoozeItemView');