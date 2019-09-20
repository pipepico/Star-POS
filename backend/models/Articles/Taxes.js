const { model, Schema } = require('mongoose');

const taxSchema = new Schema(
	{
		name: {
			type: String,
			min: 3,
			max: 30,
			required: true,
			unique: true
		},
		value: {
			type: Number,
			required: true,
			default: 0
		}
	},
	{
		timestamps: true
	}
);

module.exports = model('Taxes', taxSchema);
