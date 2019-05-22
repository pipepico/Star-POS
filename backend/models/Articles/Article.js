const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		barcode: {
			type: String,
			required: true,
			unique: true
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category'
		},
		saleUnit: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Units'
		},
		purchaseUnit: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Units'
		},
		taxes: {
			type: Array,
			default: [ { IVA: 0, IEPS: 0 } ]
		},
		price: {
			type: Array,
			required: true
		},
		stock: Number,
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
