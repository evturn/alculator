var BoozeItemView = Backbone.View.extend({
	tagName: 'div',
	id: 'booze-view',
	className: 'booze',
	render: function() {
		var html = '<h4>' + this.model.get('name') + '</h4>'
							 '<h4>' + this.model.get('abv') + '</h4>'
						   '<img src="' + this.model.get('img') + '"></h4>';
		$(this.el).html(html);
	}
});

console.log('BoozeItemView');