var Tab = Backbone.Collection.extend({
  model: Beverage,
  localStorage: new Backbone.LocalStorage('alculator'),
  url: '/tab',
});

