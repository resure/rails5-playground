#!/usr/bin/env node
'use strict';

const meow = require('meow');
const app = require('./');

const cli = meow(`
    Usage
      $ zireael [options]

    Options
      -p, --port  Port to use (defaults to 3000)

    Examples
      $ zireael --port 3030
`, {
	alias: {
		p: 'port'
	},
	default: {
		port: 3000
	}
});

app({
	port: cli.flags.port
});
