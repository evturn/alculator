var BoozeItems = Backbone.Collection.extend({
  model: BoozeItem,
  url: '/booze'
});

console.log('BoozeItems');

var boozeItems = new BoozeItems();
boozeItems.fetch();