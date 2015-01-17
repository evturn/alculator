var BoozeItems = Backbone.Collection.extend({
  model: BoozeItem,
  localStorage: new Backbone.LocalStorage('booze-backbone'),
  url: '/booze',
});

