const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		location: {
			address: {
				type: String,
				default: 'Point'
			},
			coordinates: [ Number ]
		},
		address: {
			street: String,
			district: String,
			city: String,
			state: String,
			cp: String,
			country: { type: String, default: 'Mexico' }
		},
		company: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Company'
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('Store', storeSchema);
