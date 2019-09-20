const { model, Schema } = require('mongoose');

const companySchema = new Schema(
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
		location: {
			type: {
				type: String,
				enum: [ 'Point' ]
				// required: true
			},
			coordinates: {
				type: [ Number ]
				// required: true
			}
		},
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

module.exports = model('Company', companySchema);
