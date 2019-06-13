const router = require('express').Router();
const Taxes = require('../../models/Articles/Taxes');

router.get('/', (req, res, next) => {
	Taxes.find()
		.then((tax) => {
			res.status(200).json(tax);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	Taxes.findById(id)
		.then((tax) => {
			res.status(200).json(tax);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post('/', (req, res, next) => {
	Taxes.create({ ...req.body })
		.then((tax) => {
			res.status(200).json(tax);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.patch('/:id', (req, res, next) => {
	const { id } = req.params;
	Taxes.findByIdAndUpdate(id, req.body, { new: true })
		.then((tax) => {
			res.status(200).json(tax);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.delete('/:id', (req, res, next) => {
	const { id } = req.body;
	Taxes.findOneAndDelete(id)
		.then((tax) => {
			res.status(200).json(tax);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
