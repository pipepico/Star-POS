const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		shortName: {
			type: String,
			required: true,
			unique: true
		}
	},
	{
		timeStamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('Category', categorySchema);
