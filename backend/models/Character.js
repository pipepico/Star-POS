const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema(
	{
		name: String,
		age: Number
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('Character', characterSchema);
