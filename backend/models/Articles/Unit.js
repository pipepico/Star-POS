const { model, Schema } = require('mongoose');

const unitSchema = new Schema(
	{
		name: {
			type: String,
			unique: true
		},
		shortName: {
			type: String,
			min: 3,
			max: 6,
			unique: true
		},
		quantity: {
			type: Number,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = model('Units', unitSchema);
