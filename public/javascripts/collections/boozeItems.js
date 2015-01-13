var BoozeItems = Backbone.Collection.extend({
  model: BoozeItem,
  localStorage: new Backbone.LocalStorage('todos-backbone'),
  url: '/booze',
});

console.log('BoozeItems');
