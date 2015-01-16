var beerItems = new BeerItems();
beerItems.fetch({reset: true});
new BeerItemsView({collection: beerItems});
var boozeItems = new BoozeItems({reset: true, merge: false});
new UserInputView();
new SearchView();
new BoozeItemsView();
$('input[name="male"]').bootstrapSwitch();
$('input[name="female"]').bootstrapSwitch();


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

	$('#wine-tab').on('click', function() {
	  $(this).parent().find('li.active').removeClass('active');
	  $(this).addClass('active');
	  $('#search-query').hide();
		var wineItems = new WineItems();
		wineItems.fetch({reset: true});
		wineItemView = new WineItemsView({collection: wineItems});
		console.log(this);
	});

	$('#beer-tab').on('click', function() {
		$(this).parent().find('li.active').removeClass('active');
	  $(this).addClass('active');
	  $('#search-query').show();
		var beerItems = new BeerItems();
		beerItems.fetch({reset: true});
		beerItemView = new BeerItemsView({collection: beerItems});
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
				console.log('data', data[0]);
				beer = new Beer(data);
				console.log('beer', beer);
				var view = new SearchResultsView({model: beer});
			}
		});
	});

	// $('#male').on('click', function() {
	// 	$('#male').bootstrapSwitch('toggleState');
	// });




	console.log('Client');
});