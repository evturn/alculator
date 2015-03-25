var BeverageView = Backbone.View.extend({
	tagName: 'li',
	className: 'beverage-item',
	template: _.template($('#beverage-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .beverage-image': 'select'
	},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
	renderSelection: function() {
		var userTab  = new Tab({reset: true, merge: false});
		var selection = new Beverage(this.model.attributes);
		selection.set({selected: true});
		userTab.push(selection);
		var tabItemView = new TabItemView({model: selection});
	},
	select: function(e) {
	 	this.renderSelection();
    $(e.currentTarget).addClass('screen-click');
    setTimeout(function() {
      $('img').removeClass('screen-click');
    }, 600);
  },
});


