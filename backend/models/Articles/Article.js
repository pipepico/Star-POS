const mongoose = require('mongoose');
const Price = require('../Articles/Price');

const articleSchema = new mongoose.Schema(
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
		saleUnit: {
			type: String
		},
		purchaseUnit: {
			type: String
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

module.exports = mongoose.model('Article', articleSchema);
