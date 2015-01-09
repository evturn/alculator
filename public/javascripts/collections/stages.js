var Stages = Backbone.Collection.extend({
	model: Stage,
	url: '/stages',
	initialize: function() {
		this.fetch();
	}
});

console.log('StageCollecton');