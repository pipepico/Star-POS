const mongoose = require('mongoose');

const equivalenceSchema = Schema({
	article: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	}
});

module.exports = mongoose.model('Equivalence', equivalenceSchema);
