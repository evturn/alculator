var beerItems = new BeerItems();
beerItems.fetch({reset: true});
new BeerItemsView({collection: beerItems});
var wineItems = new WineItems();
wineItems.fetch({reset: true});
new WineItemsView({collection: wineItems});
var stages = new Stages({reset: true});
stages.fetch();
var boozeItems = new BoozeItems({reset: true, merge: false});
new UserInputView();
new BoozeItemsView();

$(function() {
	boozeQueueView = new BoozeQueueView();

	$('#liquor-tab').on('click', function() {
		$(this).parent().find('li.active').removeClass('active');
	  $(this).addClass('active');
	  $('#search-query').hide();
		var liquorItems = new LiquorItems();
		liquorItems.fetch({reset: true});
		liquorItemView = new LiquorItemsView({collection: liquorItems});
	});

	$('#beer-tab').on('click', function() {
		$(this).parent().find('li.active').removeClass('active');
	  $(this).addClass('active');
	  new SearchView();
		var beerItems = new BeerItems();
		beerItems.fetch({reset: true});
		beerItemView = new BeerItemsView({collection: beerItems});
	});

	$('#wine-tab').on('click', function() {
	  $(this).parent().find('li.active').removeClass('active');
	  $(this).addClass('active');
	  $('#search-query').hide();
		var wineItems = new WineItems();
		wineItems.fetch({reset: true});
		wineItemView = new WineItemsView({collection: wineItems});
	});


	$('#beer-search').on('submit', function(e) {
		e.preventDefault();
		beerField = $('#beer-query').val();
		$.ajax({
			url: '/search',
			method: 'GET',
			data: {
				name: beerField
			},
			dataType: 'JSON',
			success: function(data) {
				beer 		 = new Beer(data);
				var view = new SearchResultsView({model: beer});
			}
		});
	});
});