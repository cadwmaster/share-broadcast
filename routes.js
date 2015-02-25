var Joi = require('joi');
var controllers = require('./controllers');

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply('Hello, world!');
		}
	},
	{
		method: 'GET',
		path: '/{name}',
		config: {
			handler: function (request, reply) {
				reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
			},
			cache: { expiresIn: 5 * 60 * 1000 },
			validate: {
				params: {
					name: Joi.string().min(3).max(20)
				}
			}
		}

	},
	{
		method: 'GET',
		path: '/playlist/{id}',
		config: {
			handler: controllers.playlist.getPlaylist,
			cache: { expiresIn: 5 * 60 * 1000 },
			validate: {
				params: {
					id: Joi.string().min(3).max(20)
				}
			}
		}
	}

];
