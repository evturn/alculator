var StageView = Backbone.View.extend({
	el: $('#stage'),
	template: _.template($('#stage-template').html()),
	initialize: function() {
		this.takeStage();
	},
	render: function() {
		curtainClose = curtainCall.toJSON();
		this.$el.html(this.template(curtainClose));
		return this;
	},
	takeStage: function() {
		var stageTaker = new Stage (this.model.attributes)
		stageKey = stageTaker.get('bac');
		this.severityCheck(stageKey);
	},
	severityCheck: function(key) {
			if (key < 0.02) {
				curtainCall = stages.models[0];
				this.render();	
			} else if (key < 0.04) {
				curtainCall = stages.models[1];
				this.render();
			} else if (key < 0.06) {
				curtainCall = stages.models[2];
				this.render();
			} else if (key < 0.07) {
				curtainCall = stages.models[3];
				this.render();
			} else if (key < 0.10) {
				curtainCall = stages.models[4];
				this.render();
			} else if (key < 0.13) {
				curtainCall = stages.models[5];
				this.render();
			} else if (key < 0.16) {
				curtainCall = stages.models[6];
				this.render();
			} else if (key < 0.20) {
				curtainCall = stages.models[7];
				this.render();
			} else if (key < 0.25) {
				curtainCall = stages.models[8];
				this.render();
			} else if (key < 0.30) {
				curtainCall = stages.models[9];
				this.render();
			} else if (key >= 0.30) {
				curtainCall = stages.models[10];
				this.render();
			} else {
				alert('You sure you entered all your info?');
			}
	},
});

console.log('StageView');