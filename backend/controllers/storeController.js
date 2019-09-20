const Store = require('../models/Store');

exports.newStore = (req, res) => {
	Store.create({ ...req.body })
		.then((store) => {
			res.status(201).json({ message: 'Created successfully!' });
		})
		.catch((err) => {
			res.status(400).json({ message: `Error: ${err}` });
		});
};

exports.getStores = (req, res) => {
	Store.find()
		.then((stores) => {
			res.status(200).json(stores);
		})
		.catch((err) => {
			res.status(400).json({ message: `Error: ${err}` });
		});
};

exports.findOne = (req, res) => {
	Store.findById(req.params.storeId)
		.then((store) => {
			res.status(200).json(store);
		})
		.catch((err) => {
			res.status(400).json({ message: `Error: ${err}` });
		});
};

exports.updateOne = (req, res) => {
	Store.findByIdAndUpdate(req.params.storeId, { ...req.body }, { new: true })
		.then((store) => {
			res.status(200).json(store);
		})
		.catch((err) => {
			res.status(400).json({ message: `Error: ${err}` });
		});
};

exports.deleteOne = (req, res) => {
	Store.findByIdAndRemove(req.params.storeId)
		.then(() => res.status(200).json({ message: 'Removed Successfully' }))
		.catch((err) => res.status(400).json('Error: ' + err));
};
