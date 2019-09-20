const { model, Schema } = mongoose;
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
			type: String
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
