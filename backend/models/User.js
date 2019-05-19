const mongoose = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
	username: {
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
});
