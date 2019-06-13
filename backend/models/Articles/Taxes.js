const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema(
	{
		name: String,
		value: Number
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('Taxes', taxSchema);
