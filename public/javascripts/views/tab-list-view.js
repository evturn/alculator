var TabListView = Backbone.View.extend({
	el: '#tab',
	counterTemplate: _.template($('#tab-counter-template').html()),
  initialize: function() {
  	this.counter();
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'change', this.counter);
  },
  addOne: function(model) {
    this.counter();
    var view = new TabItemView({model: model});
    $('#tab-list').append(view.render().el);
    return this;
  },
	counter: function() {
		$('.tab-counter').html(this.counterTemplate());
		return this;
	},
});