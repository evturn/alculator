var BoozeItemView = Backbone.View.extend({
	el: $('#booze'),
	template: _.template($('#booze-item-template')),
	initialize: function() {
		this.model.on('hide', this.remove, this);
	},
	render: function() {
		var html = '<h4>' + this.model.get('name') + '</h4>'
							 '<h4>' + this.model.get('abv') + '</h4>'
							 '<h4>' + this.model.get('img') + '</h4>'
	}
});

console.log('BoozeItemView');