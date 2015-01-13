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
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
	addBooze: function(e) {
		e.preventDefault();
		var boozeOnDelivery = new BoozeItem(this.model.attributes)
		boozeOnDelivery.set({selected: true});
		console.log(boozeOnDelivery)
		boozeItems.add(boozeOnDelivery);
		boozeOnDelivery.save();
	}
});

console.log('BeerItemView');
