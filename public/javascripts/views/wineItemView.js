var WineItemView = Backbone.View.extend({
	tagName: 'li',
	className: 'beverage-item',
	template: _.template($('#wine-item-view-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .add': 'addBooze'
	},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
	addBooze: function(e) {
		e.preventDefault();
		var boozeOnDelivery = new BoozeItem(this.model.attributes)
		boozeOnDelivery.set({selected: true});
		boozeItems.add(boozeOnDelivery);
		boozeOnDelivery.save();
	}
});

