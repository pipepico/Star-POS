const { model, Schema } = require('mongoose');

const articleSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		barcode: [
			{
				type: String,
				default: '',
				unique: true
			}
		],
		category: {
			type: String
		},
		unit: {
			sale: {
				name: String,
				quantity: Number
			},
			purchase: {
				name: String,
				quantity: Number
			}
		},
		taxes: {
			IVA: {
				type: Number,
				default: 0
			},
			IEPS: {
				type: Number,
				default: 0
			}
		},
		price: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Price'
			}
		],
		stock: {
			type: Number,
			default: 0
		},
		active: {
			type: Boolean,
			default: true
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = model('Article', articleSchema);
