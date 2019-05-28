const router = require('express').Router();
const Articles = require('../models/ArticlesX');

// // Read all art
// router.get('/', (req, res, next) => {
// 	Articles.find().then((art) => res.status(200).json(art)).catch((err) => res.status(500).json(err));
// });

// router.get('/:id', (req, res, next) => {
// 	Articles.findById(req.params.id).then((art) => res.status(200).json(art)).catch((err) => res.status(500).json(err));
// });

// router.post('/', (req, res, next) => {
// 	Articles.create({ ...req.body }).then((article) => res.status(200).json(article)).catch((err) => {
// 		res.status(500).json(err);
// 		console.log(err);
// 	});
// });

// router.patch('/:id', (req, res, next) => {
// 	Articles.findByIdAndUpdate(req.params.id, req.body, { new: true })
// 		.then((art) => res.status(200).json(art))
// 		.catch((err) => res.status(500).json(err));
// });

router.delete('/:id', (req, res, next) => {
	const { password } = req.headers;
	if (!password) return res.status(401).json({ msg: 'hey' });
	Articles.findByIdAndDelete(req.params.id)
		.then((art) => res.status(200).json(art))
		.catch((err) => res.status(500).json(err));
});

router.get('/', (req, res, next) => {
	Articles.find()
		.then((article) => {
			res.status(200).json(article);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/name', (req, res, next) => {
	Articles.findOne({ name: 'cerveza'}, function (err, doc){
		
	});
	Articles.findOne({ name: 'cerveza' })
		.then((article) => {
			res.status(200).json(article);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});
router.post('/', (req, res, next) => {
	Articles.create({ ...req.body })
		.then((article) => {
			res.status(200).json(article);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
