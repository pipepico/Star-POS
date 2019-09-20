const Company = require('../models/Company');

exports.getCompanys = (req, res) => {
	Company.find()
		.populate('stores')
		.then((companys) => {
			res.status(200).json(companys);
		})
		.catch((err) => res.status(400).json({ message: 'Error: ' + err }));
};

exports.findOne = (req, res) => {
	Company.findById(req.params.companyId)
		.populate('stores')
		.then((company) => {
			res.status(200).json(company);
		})
		.catch((err) => res.status(400).json({ message: 'Error: ' + err }));
};

exports.newCompany = (req, res) => {
	Company.create({ ...req.body })
		.then(() => {
			res.status(201).json({ message: 'Created successfully' });
		})
		.catch((err) => res.status(400).json({ message: 'Error: ' + err }));
};
exports.updateOne = (req, res) => {
	Company.findByIdAndUpdate(req.params.companyId, { ...req.body }, { new: true })
		.then((company) => {
			res.status(200).json(company);
		})
		.catch((err) => res.status(400).json({ message: 'Error: ' + err }));
};

exports.deleteOne = (req, res) => {
	Company.findByIdAndRemove(req.params.companyId)
		.then(() => res.status(200).json({ message: 'Deleted successfully' }))
		.catch((err) => res.status(400).json({ message: 'Error: ' + err }));
};
