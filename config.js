module.exports = {
	product: {
		name: 'ShareBroadcast'
	},
	server: {
		web: {
			host: 'localhost',
			port: 8000
		},
		api: {
			host: 'localhost',
			port: 8001
		}
	},
	database: {
		host: '127.0.0.1',
		port: 27017,
		db: 'postmile',
		username: '',
		password: ''
	},
	email: {
		fromName: 'Postmile',
		replyTo: 'no-reply@localhost',
		admin: 'eran@localhost',
		feedback: 'eran@localhost',
		server: {
//      port: 25,
//      user: '',
//      password: '',
//      host: 'localhost',
//      ssl: false
		}
	},
	login: {
		twitter: {
			clientId: '',
			clientSecret: ''
		},
		facebook: {
			clientId: '',
			clientSecret: '',
		},
		yahoo: {
			clientId: '',
			clientSecret: ''
		}
	}
};