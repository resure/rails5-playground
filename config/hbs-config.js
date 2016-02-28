const path = require('path');

module.exports = {
	extname: '.hbs',
	layoutsDir: path.join(__dirname, '../app/views/layouts'),
	partialsDir: path.join(__dirname, '../app/views/partials'),
	defaultLayout: 'main'
};
