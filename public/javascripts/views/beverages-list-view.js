var BeveragesListView = Backbone.View.extend({
  el: '#beverages-list',
  initialize: function() {
    this.renderTab();
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(model) {
    var view = new BeverageView({model: model});
    this.$el.append(view.el);
  },
  addAll: function() {
    this.$el.empty();
    this.collection.each(function(model) {
      this.addOne(model);
    }.bind(this));
  },
  renderTab: function() {
    boozeItems  = new Tab({reset: true, merge: false});
    boozeQueueView = new BoozeQueueView({collection: boozeItems});
    new TabListView();
  },
});



