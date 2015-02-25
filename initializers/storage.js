/*!
 * brightStamps - storage
 * Date: 17/09/14
 *
 * Copyright(c) 2014 IceMobile <icemobile.com>
 *
 * Released under GNU General Public License
 */

/**
 * Module dependencies.
 */
var Promise = require('bluebird');
var util = require('util');
var options = require('../config/').get();
var logger = require('bucker').createLogger(options.logger, module);
var mongoose = require('mongoose');

/**
 * Class definition
 */
function Storage() {

}

Storage.prototype.init = function() {

	var deferred = Promise.pending();

	var mongoUrl = "mongodb://" + options.mongo.host + ":" + options.mongo.port + "/" + options.mongo.databaseName;

	process.nextTick(function() {
		logger.info("Connecting to mongo cache db: " + mongoUrl);

		mongoose.connect(mongoUrl);

		var db = mongoose.connection;
		db.on('error', function(err) {
			logger.error("Could not setup connection to MongoDB at: " + mongoUrl);
			deferred.reject(err);
			return;
		});

		db.once('open', function callback () {
			logger.info('Connection to mongo database opened');
			deferred.resolve();
		});
	});

	return deferred.promise;
}


Storage.instance = new Storage;

/**
 * Module exports
 */
module.exports = Storage.instance;

