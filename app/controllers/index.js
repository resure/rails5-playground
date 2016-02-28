'use strict';

const path = require('path');

function requireController(name) {
	return require(path.join(__dirname, name));
}

module.exports = {
	home: requireController('home')
};
