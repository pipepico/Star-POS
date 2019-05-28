const mongoose = require('mongoose');

const artSchema = new mongoose.Schema(
	{
		name: String,
		price: Number
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('ArticlesX', artSchema);
