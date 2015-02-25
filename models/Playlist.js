/**
 * Created by candrade on 2/24/15.
 */



var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =
	(function () {

		var playlistSchema = new Schema( {

			name: {type: String, index: true},
			tmp: {type: Boolean},
			items: Schema.Types.Mixed,
			created: { type: Date, default: Date.now},
			updated: { type: Date, default: Date.now}

		} );

		return mongoose.model( 'Playlist', playlistSchema );
	})();