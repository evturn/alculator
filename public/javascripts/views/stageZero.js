var StageZero = Backbone.View.extend({
	el: $('#stage'),
	stageZero: _.template($('#stage-zero-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.stageZero());
		return this;
	}
});

console.log('StageZero');

// <div class="row col-lg-12 col-lg-offset-1 form-group" id="drink-input">
// 	<div class="col-lg-6">
// 			<label for="drinks">&numero; of DRINKS</label>
// 			<select class="form-control input-lg" name="drinks" id="drinks">
// 			  <option>1</option>
// 			  <option>2</option>
// 			  <option>3</option>
// 			  <option>4</option>
// 			  <option>5</option>
// 			  <option>6</option>
// 			  <option>7</option>
// 			  <option>8</option>
// 			  <option>9</option>
// 			</select>
// 		</div>
// 		<div class="col-lg-6">
// 			<label for="ABV">ALCOHOL %</label>
// 			<input class="form-control input-lg" type="text" id="abv" name="abv" placeholder="4.5" >
// 		</div>
// 	</div>