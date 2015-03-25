var TabListView = Backbone.View.extend({
	el: '#tab',
	counterTemplate: _.template($('#tab-counter-template').html()),
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'change', this.counter);
  },
  addOne: function(model) {
    var view = new TabItemView({model: model});
    this.$('#tab-list').append(view.render().el );
  },
	counter: function() {
		tabCount = this.collection.where({selected: true}).length;
		$('#counter').html(this.counterTemplate());
		return this;
	},
});