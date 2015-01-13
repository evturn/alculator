var LiquorItemView = Backbone.View.extend({
	className: 'col-xs-4 align drink-space liquor-item',
	template: _.template($('#liquor-item-view-template').html()),
	events: {
		'click input': 'addBooze'
	},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
	},
});

console.log('LiquorItemView');