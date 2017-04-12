// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

	// template: 

  initialize: function() {
  	this.collection.on('add', this.render());

  },

  render: function(song) {
  	var songQueue = new SongQueueEntryView({model: song});
    //return this.$el;

	this.$el.html('<th>Song Queue</th>').append(
		this.collection.map(function(song) {
			return new SongQueueEntryView({model: song}).render();
		})
	);
  }

});
