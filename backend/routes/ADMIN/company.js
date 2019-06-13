const router = require('express').Router();
const Company = require('../../models/Company');

router.get('/', (req, res, next) => {
	Company.find().then((company) => res.status(200).json(company)).catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	Company.findById(id)
		.then((company) => {
			res.status(200).json(company);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/rfc/:rfc', (req, res, next) => {
	const { rfc } = req.params;
	Company.find({
		rfc: rfc
	})
		.then((company) => res.status(200).json(company))
		.catch((err) => res.status(500).json(err));
});

router.post('/create', (req, res, next) => {
	Company.create({
		...req.body
	})
		.then((company) => res.status(200).json(company))
		.catch((err) => res.status(200).json(err));
});

router.patch('/edit/:id', (req, res, next) => {
	const { id } = req.params;
	Company.findByIdAndUpdate(id, req.body, { new: true })
		.then((company) => res.status(200).json(company))
		.catch((err) => res.status(500).json(err));
});

router.delete('/d/:id', (req, res, next) => {
	const { id } = req.params;
	Company.findByIdAndDelete(id)
		.then((company) => res.status(200).json(company))
		.catch((err) => res.status(500).json(err));
});

module.exports = router;
