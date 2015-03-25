var TabCounter = Backbone.View.extend({
	el: '#tab',
	template: _.template($('#tab-counter-template').html()),
	initialize: function() {
		this.listenTo(this.collection, 'change', this.render);
    this.render();
	},
	render: function() {
		boozeQueue = this.collection.where({selected: true}).length;
		this.$el.html(this.template());
	}
});