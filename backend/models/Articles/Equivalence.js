const { model, Schema } = require('mongoose');

const equivalenceSchema = new Schema({
	article: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article',
		required: true
	},
	barcode: {
		type: String,
		required: true,
		unique: true
	},
	equivalence: {
		type: Number,
		default: 1
	}
});

module.exports = model('Equivalence', equivalenceSchema);
