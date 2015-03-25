// var TabCounter = Backbone.View.extend({
// 	el: '#tab',
// 	template: _.template($('#tab-counter-template').html()),
// 	initialize: function() {
//     this.render();
// 		this.listenTo(this.collection, 'change', this.render);
// 	},
// 	render: function() {
// 		tabCount = this.collection.where({selected: true}).length;
// 		this.$el.html(this.template());
// 		return this;
// 	},
// });