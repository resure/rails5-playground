'use strict';

module.exports = function (opts) {
	if (opts.debug) {
		process.env.DEBUG = 'server';
	}

	const app = require('./app.js');
	const debug = require('debug')('server');
	const http = require('http');

	app.set('port', opts.port);

	const server = http.createServer(app);
	server.listen(app.get('port'));
	server.on('error', onError);
	server.on('listening', onListening);

	/**
	 * Event listener for HTTP server "error" event.
	 */

	function onError(error) {
		if (error.syscall !== 'listen') {
			throw error;
		}
		const port = app.get('port');

		const bind = typeof port === 'string' ?
			'Pipe ' + port :
			'Port ' + port;

		// handle specific listen errors with friendly messages
		switch (error.code) {
			case 'EACCES':
				console.error(bind + ' requires elevated privileges');
				process.exit(1);
				break;
			case 'EADDRINUSE':
				console.error(bind + ' is already in use');
				process.exit(1);
				break;
			default:
				throw error;
		}
	}

	/**
	 * Event listener for HTTP server "listening" event.
	 */

	function onListening() {
		var addr = server.address();
		var bind = typeof addr === 'string' ?
			'pipe ' + addr :
			'port ' + addr.port;
		debug('Listening on ' + bind);
	}
};

