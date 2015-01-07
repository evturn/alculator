var BacMeterView = Backbone.View.extend({
	el: $('#bac-meter'),
	initialize: function() {
		this.render();
	},
	template: _.template($('#bac-meter-template').html()),
	render: function() {
		this.$el.html(this.template());
    return this;
	}
});

console.log('BacMeterView')