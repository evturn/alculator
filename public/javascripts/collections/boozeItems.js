var BoozeItems = Backbone.Collection.extend({
  model: Beer,
	url: '/booze',
	localStorage: new Backbone.LocalStorage('booze-rounds'),
	completed: function() {
  	return this.filter(function(boozeItem) {
    	return boozeItem.get('completed');
  	});
  },
	remaining: function() {
  	return this.without.apply(this, this.completed() );
  },
});

console.log('BoozeItems');