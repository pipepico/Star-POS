const router = require('express').Router();
const Categories = require('../../models/Articles/Category');

router.get('/', (req, res, next) => {
	Categories.find()
		.then((category) => {
			res.status(200).json(category);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	Categories.findById(id)
		.then((category) => {
			res.status(200).json(category);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post('/', (req, res, next) => {
	Categories.create({ ...req.body })
		.then((category) => {
			res.status(200).json(category);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.patch('/:id', (req, res, next) => {
	const { id } = req.params;
	Categories.findByIdAndUpdate(id, req.body, { new: true })
		.then((category) => {
			res.status(200).json(category);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	Categories.findByIdAndDelete(id)
		.then((category) => {
			res.status(200).json(category);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
