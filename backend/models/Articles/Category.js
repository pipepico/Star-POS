const { model, Schema } = mongoose;

const categorySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		shortName: {
			type: String,
			required: true,
			unique: true
		},
		description: {
			type: String,
			min: 6,
			max: 255,
			required: true,
			unique: true
		}
	},
	{
		timeStamps: true,
		versionKey: false
	}
);

module.exports = model('Category', categorySchema);
