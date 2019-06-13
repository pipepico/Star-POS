const router = require('express').Router();
const Company = require('../../models/Company');
const Store = require('../../models/Store');

router.get('/', (req, res, next) => {
	Store.find()
		.then((company) => {
			res.status(200).json(company);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	Store.findById(id)
		.then((store) => {
			res.status(200).json(store);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post('/', (req, res, next) => {
	Store.create({ ...req.body })
		.then((store) => {
			res.status(200).json(store);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.patch('/:id', (req, res, next) => {
	const { id } = req.params;
	Store.findByIdAndUpdate(id, req.body, { new: true })
		.then((store) => {
			res.status(200).json(store);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.delete('/d/:id', (req, res, next) => {
	const { id } = req.params;
	Store.findByIdAndDelete(id)
		.then((store) => {
			res.status(200).json(store);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
