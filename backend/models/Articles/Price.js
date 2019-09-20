const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
	article: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	},
	name: {
		type: String,
		required: true
	},
	value: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		require: true,
		default: 1
	}
});

module.exports = mongoose.model('Price', priceSchema);
