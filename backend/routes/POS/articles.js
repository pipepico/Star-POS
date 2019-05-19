const router = require('express').Router();
const Article = require('../../models/Articles/Article');

router.get('/articles', (req, res, next) => {
	Article.find().then((articles) => res.status(200).json(articles)).catch((err) => res.status(500).json(err));
});

router.get('/articles/:id', (req, res, nex) => {
	const { id } = req.params;
	Article.findById(id).then((articles) => res.status(200).json(articles)).catch((err) => res.status(500).json(err));
});

router.post('/articles', (req, res, next) => {
	Article.create({ ...req.body })
		.then((article) => res.status(200).json(article))
		.catch((err) => res.status(500).json(err));
});

router.patch('/articles/:id', (req, res, next) => {
	const { id } = req.params;
	Article.findByIdUpdate(id, req.body, { new: true })
		.then((article) => res.status(200).json(article))
		.catch((err) => res.status(500).json(err));
});

router.delete('/article/:id', (req, res, next) => {
	const { id } = req.params;
	Article.findByIdUpdate(id, { $set: { active: 'false' } }, { new: true })
		.then((article) => res.status(200).json(article))
		.catch((err) => res.status(500).json(err));
});

module.exports = router;
