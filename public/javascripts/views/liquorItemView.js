var LiquorItemView = Backbone.View.extend({
	className: 'col-xs-4 align drink-space liquor-item',
	template: _.template($('#liquor-item-view-template').html()),
	initialize: function() {

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
		console.log('boozeOnDelivery', boozeOnDelivery)
		boozeItems.add(boozeOnDelivery);
		boozeOnDelivery.save();
	}
});

console.log('LiquorItemView');