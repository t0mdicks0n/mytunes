// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',

  //temp: this,

  initialize: function(temp){
		$.ajax({
			context: this,
			url: this.url,
			type: 'GET',
			data: {},
			contentType: 'application/json',
			success: function (data) {
				this.add(data.results)
				this.trigger('TOM')
			},
			error: function (data) {
			}
		});
  },

  
  parse: function(response) {
    return response.results;
  },

  ended: function(){
  	this.model.ended;
  },


});