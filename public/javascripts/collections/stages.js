var Stages = Backbone.Collection.extend({
	model: Stage,
	url: '/stages',
	initialize: function() {
		this.fetch({
			success: function() {
				console.log('got your collection');
			}
		});
	}
});

console.log('StageCollecton');