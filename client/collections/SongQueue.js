// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
	this.on('add', function() {
		if(this.length === 1) {
			this.playFirst();
		}
	})
	
	this.on('ended', function () {
		this.shift();
		// if there are any songs left
		if(this.length > 0){
			// play the next one
			this.playFirst();
		}
	}),

	this.on('dequeue', function () {
		console.log(this)
		this.remove();
	})

  },

  playFirst: function(){
  	//this.model.play();
  	this.at(0).play();
  }

});

