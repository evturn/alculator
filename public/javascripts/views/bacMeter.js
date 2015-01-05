var BacMeterView = Backbone.View.extend({
	el: $('#bac-meter'),
	initialize: function() {
		this.render();
	},
	template: _.template($('#bacMeterTemplate').html()),
	render: function() {
		this.$el.html(this.template());
    return this;
	}
});

console.log('BacMeterView')