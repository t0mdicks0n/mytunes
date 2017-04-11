// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

	// template: 

  initialize: function() {
  	this.on('change', this.render());

  },

  render: function(song) {
  	var songQueue = new SongQueueEntryView({model: song});
    //return this.$el;
  }

});
