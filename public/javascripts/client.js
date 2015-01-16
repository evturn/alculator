new UserInputView();
new SearchView();
var beerItems = new BeerItems();
beerItems.fetch({reset: true});
new BeerItemsView({collection: beerItems});
var boozeItems = new BoozeItems({reset: true, merge: false});
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
				console.log('data', data);
				newAbv = parseInt(data.abv);
				searchResultItem = new SearchResultItem({name: data.name, abv: newAbv});
				console.log('success', searchResultItem);
				var view = new SearchResultItemView({model: searchResultItem});
			}
		});
	});

	console.log('Client');
});