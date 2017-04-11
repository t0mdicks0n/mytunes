// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  server: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',

  //temp: this,

  initialize: function(temp){
		$.ajax({
			context: this,
			url: this.server,
			type: 'GET',
			data: {},
			contentType: 'application/json',
			success: function (data) {
				this.add(data.results)
			},
			error: function (data) {

			}
		});

		this.on
  },

  ended: function(){
  	this.model.trigger('ended')
  },

  fetch: {
  	success: function(){
  		console.log(true)
  	}
  }

});