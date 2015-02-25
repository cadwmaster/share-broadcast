var Hapi = require('hapi');
var Good = require('good');
var routes = require('./routes');
var options = require('./config/' ).get();
var Storage = require('./initializers/storage');
var Promise = require('bluebird');
var server;

server = new Hapi.Server();
server.connection({ port: options.http.port });
server.route(routes);

Storage.init()
	.then(function () {
		return new Promise(function(resolve, reject) {
			server.register({
				register: Good,
				options: {
					reporters: [{
						reporter: require('good-console'),
						args:[{ log: '*', response: '*' }]
					}]
				}
			}, function (err) {
				if (err) {
					reject(err);
					throw err; // something bad happened loading the plugin
				}
				resolve();
			});

		});
	})
	.then(function() {
		server.start(function () {
			server.log('info', 'Server running at: ' + server.info.uri);
		});
	})
;