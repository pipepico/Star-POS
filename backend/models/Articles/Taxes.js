const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
	name: String,
	value: Number
});

module.exports = mongoose.model('Taxes', taxSchema);
