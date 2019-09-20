const Category = require('../models/Articles/Category');

exports.getCategories = (req, res) => {
	Category.find()
		.then((categories) => {
			res.status(200).json(categories);
		})
		.catch((err) => res.status(400).json({ message: `Error: ${err}` }));
};

exports.findOneCategory = (req, res) => {
	Category.findById(req.params.categoryId)
		.then((category) => {
			res.status(200).json(category);
		})
		.catch((err) => res.status(400).json({ message: `Error: ${err}` }));
};

exports.newCategory = (req, res) => {
	Category.create({ ...req.body })
		.then(() => {
			res.status(201).json({ message: 'Created Successfully' });
		})
		.catch((err) => res.status(400).json({ message: `Error: ${err}` }));
};

exports.updateOne = (req, res) => {
	Category.findByIdAndUpdate(req.params.categoryId, { ...req.body }, { new: true })
		.then((company) => {
			res.status(200).json(company);
		})
		.catch((err) => res.status(400).json({ message: 'Error: ' + err }));
};

exports.deleteOne = (req, res) => {
	Category.findByIdAndRemove(req.params.categoryId)
		.then(() => res.status(200).json({ message: 'Deleted successfully' }))
		.catch((err) => res.status(400).json({ message: 'Error: ' + err }));
};
