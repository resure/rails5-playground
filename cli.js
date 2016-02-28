#!/usr/bin/env node
'use strict';

const meow = require('meow');
const app = require(__dirname);

const cli = meow(`
    Usage
      $ zireael [options]

    Options
      -p, --port  Port to use (defaults to 3000)
	  -d, --debug Debug mode for express

    Examples
      $ zireael --port 3030
`, {
	alias: {
		p: 'port',
		d: 'debug'
	},
	default: {
		port: 3000,
		debug: false
	}
});

app({
	port: cli.flags.port,
	debug: cli.flags.debug
});
