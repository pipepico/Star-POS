const mongoose = require('mongoose');
const { Schema } = mongoose;
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		role: {
			type: String,
			default: 'USER',
			enum: [ 'ADMIN', 'SUPERVISOR', 'USER' ]
		},
		store: {
			type: Schema.Types.ObjectId,
			ref: 'Store'
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);
