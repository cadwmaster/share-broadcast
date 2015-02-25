var convict = require('convict');

var conf;
conf = convict( {
	timeout: 5000,

	appName: {
		doc: 'Name of the app',
		format: String,
		default: 'ShareBroadcast',
		env: 'APP_NAME'
	},

	auth: {
		sessionTimeoutMinutes: {
			doc: 'Timeout for the session',
			format: 'int',
			default: 10,
			env: 'SESSION_ENV'
		}
	},

	env: {
		doc: 'The applicaton environment.',
		format: ['production', 'development', 'acceptance', 'test', 'local'],
		default: 'local',
		env: 'NODE_ENV'
	},

	client: {
		doc: 'The clientside application configuration',
		format: Object,
		default: {}
	},

	http: {
		port: {
			doc: 'The port to bind.',
			format: 'port',
			default: 3000,
			env: 'PORT'
		},
		authRoutes: {
			doc: 'Routes that require authentication.',
			format: Object,
			default: {}
		}
	},

	logger: {
		app: {
			doc: 'The name of the logger',
			format: String,
			default: 'shareBroadcast'
		},
		level: {
			doc: 'The logging level',
			format: String,
			default: 'info'
		}
	},

	mongo: {
		host: {
			doc: "The mongodb host",
			format: String,
			default: "127.0.0.1",
			env: "MONGO_HOST"
		},
		port: {
			doc: "The mongodb port",
			format: "port",
			default: 27017,
			env: "MONGO_PORT"
		},
		databaseName: {
			doc: "The mongo database name",
			format: String,
			default: "shareBroadcast",
			env: "MONGO_DATABASE_NAME"
		}
	}
} );

var env = conf.get('env');

conf.loadFile(require.resolve('./' + env + '.json'));

conf.validate();

module.exports = conf;
