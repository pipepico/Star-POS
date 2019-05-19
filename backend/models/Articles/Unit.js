const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true
	},
	shortName: {
		type: String,
		unique: true
	},
	quantity: Number
});

module.exports = mongoose.model('Units', unitSchema);
