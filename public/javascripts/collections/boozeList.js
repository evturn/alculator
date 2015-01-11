var BoozeList = Backbone.Collection.extend({
	model: BoozeItem,
	url: '/booze',
});

console.log('BoozeList');