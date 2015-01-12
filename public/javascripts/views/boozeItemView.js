var BoozeItemView = Backbone.View.extend({
	el: '#booze-items',
	template: _.template($('#booze-item-view-template').html()),
	events: {
		'click #light': 'addBooze'
		
	},
	render: function() {
		var boozeAttributes = this.model.toJSON();
		this.$el.append(this.template(boozeAttributes));
		return this;
	},

	addBooze:function(e){
    e.preventDefault();

    var name = this.model.find("name").val();
    var abv = this.model.find("abv").val();
    var img = this.model.find("img").val();
    var ounces = this.model.find("ounces").val();
    var newBooze = new BoozeItem({
    	name: name,
    	abv: abv,
    	img: img,
    	ounces: ounces,
    	selected: true
    	});  
    this.collection.add(newBooze);  
  },
});

console.log('BoozeItemView');