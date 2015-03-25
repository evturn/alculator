var BeverageView = Backbone.View.extend({
	tagName: 'li',
	className: 'beverage-item',
	template: _.template($('#beverage-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click img': 'acknowledge'
	},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
	select: function() {
		var userTab  = new Tab({reset: true, merge: false});
		var selection = new Beverage(this.model.attributes);
		selection.set({selected: true});
		userTab.push(selection);
		var tabItemView = new TabItemView({model: selection});
	},
	 acknowledge: function(e) {
	 	this.select();
    console.log('i felt that!', $(e.currentTarget));
    $(e.currentTarget).addClass('screen-click');
    setTimeout(function() {
      $('img').removeClass('screen-click');
    }, 600);
  },
});


