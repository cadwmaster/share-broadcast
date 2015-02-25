/**
 * Created by candrade on 2/23/15.
 */

var Playlist = require('../models/Playlist');
var Boom = require('boom');


module.exports = {
	getPlaylist: function(request, reply) {

		if(request.params.id) {
			return reply('success');

		}

		var error = Boom.badRequest('Parameter ID is not set');
		error.output.statusCode = 400;

		return reply(error);
	}
};
