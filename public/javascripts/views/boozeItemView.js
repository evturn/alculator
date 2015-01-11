var BoozeItemView = Backbone.View.extend({
	this.model.on('hide', this.remove, this);
});

console.log('BoozeItemView');