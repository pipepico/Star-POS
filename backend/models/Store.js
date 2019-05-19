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
		address: String
	},
	{
		timestamps: true,
		versionKey: false
	}
);
