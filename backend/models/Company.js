const mongoose = require('mongoose');

const companySchema = mongoose.Schema(
	{
		name: {
			company: {
				type: String,
				required: true,
				unique: true
			},
			nick: {
				type: String,
				required: true,
				unique: true
			}
		},
		rfc: {
			type: String,
			required: true,
			unique: true
		},
		coordinates: [ Number ],
		address: {
			street: String,
			district: String,
			city: String,
			state: String,
			cp: String,
			country: { type: String, default: 'Mexico' }
		},
		stores: {
			type: Array,
			default: ''
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('Company', companySchema);
