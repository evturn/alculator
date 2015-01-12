var BeerItemView = Backbone.View.extend({
	el: '#beverage-items',
	template: _.template($('#beer-item-view-template').html()),
	events: {
		'click input.add-booze': 'addBooze'
	},
	initialize: function(){
    this.listenTo(this.model, 'add', this.render);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
	addBooze: function(e) {
		e.preventDefault();
		console.log("whooo", this);
	}
});

console.log('BeerItemView');
