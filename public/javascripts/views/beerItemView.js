var BeerItemView = Backbone.View.extend({
	className: 'col-xs-4 align drink-space beer-item',
	template: _.template($('#beer-item-view-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click input': 'addBooze'
	},
  render: function(){
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  },
	addBooze: function(e) {
		e.preventDefault();
		boozeItems.add(this.model);
	}
});

console.log('BeerItemView');
