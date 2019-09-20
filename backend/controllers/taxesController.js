const Taxes = require('../models/Articles/Taxes');

exports.getTaxes = (req, res) => {
	Taxes.find()
		.then((taxes) => {
			res.status(200).json(taxes);
		})
		.catch((err) => {
			res.status(400).json({ message: `Error: ${err}` });
		});
};

exports.findOneTax = (req, res) => {
	Taxes.findById(req.params.taxId).then((tax) => {
		res.status(200).json(tax);
	});
};

exports.newTax = (req, res) => {
	Taxes.create({ ...req.body })
		.then(() => {
			res.status(201).json({ message: 'Created successfully!' });
		})
		.catch((err) => {
			res.status(400).json({ message: `Error: ${err}` });
		});
};

exports.updateOneTax = (req, res) => {
	Taxes.findByIdAndUpdate(req.params.taxId, { ...req.body }, { new: true })
		.then((tax) => {
			res.status(200).json(tax);
		})
		.catch((err) => {
			res.status(400).json({ message: `Error: ${err}` });
		});
};

exports.deleteOneTax = (req, res) => {
	Taxes.findByIdAndRemove(req.params.taxId)
		.then(() => {
			res.status(200).json({ message: 'Deleted successfully' });
		})
		.catch((err) => {
			res.status(400).json({ message: `Error: ${err}` });
		});
};
