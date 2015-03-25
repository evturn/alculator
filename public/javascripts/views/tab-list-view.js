var TabListView = Backbone.View.extend({
	el: '#tab-list',
	counterTemplate: _.template($('#tab-counter-template').html()),
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'change', this.counter);
  },
  addOne: function(model) {
    var view = new TabItemView({model: model});
    this.$el.append(view.render().el );
  },
	counter: function() {
		tabCount = this.collection.where({selected: true}).length;
		$('#tab').html(this.counterTemplate());
		return this;
	},
});