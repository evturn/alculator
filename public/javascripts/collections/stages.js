var Stages = Backbone.Collection.extend({
	model: Stage,
	url: '/stages',
	initialize: function() {
		this.fetch({
			success: function() {
				console.log('got your collection');
				var stageView = new StageView({collection: this.collection});
			}
		});
	}
});

console.log('StageCollecton');