var Stages = Backbone.Collection.extend({
	model: Stage,
	url: '/stages',

});

console.log('StageCollecton');

var stages = new Stages();
stages.fetch();