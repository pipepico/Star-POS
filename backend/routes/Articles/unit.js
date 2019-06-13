const router = require('express').Router();
const Units = require('../../models/Articles/Unit');

router.get('/', (req, res, next) => {
	Units.find()
		.then((unit) => {
			res.status(200).json(unit);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	Units.findById(id)
		.then((unit) => {
			res.status(200).json(unit);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post('/', (req, res, next) => {
	Units.create({ ...req.body })
		.then((unit) => {
			res.status(200).json(unit);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.patch('/:id', (req, res, next) => {
	const { id } = req.params;
	Units.findByIdAndUpdate(id, req.body, { new: true })
		.then((unit) => {
			res.status(200).json(unit);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	Units.findByIdAndDelete(id)
		.then((unit) => {
			res.status(200).json(unit);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
