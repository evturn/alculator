var BoozeItemsView = Backbone.View.extend({
	el: '#booze-items',
  initialize: function() {
    this.listenTo(boozeItems, 'add', this.addOne);
    this.listenTo(boozeItems, 'reset', this.addAll);
  },
  addOne: function(model) {
    var viewOfBooze = new BoozeItemView({model: model});
    this.$el.append(viewOfBooze.render().el );
  },

});

console.log('BoozeItemsView');