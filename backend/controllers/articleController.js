const Article = require('../models/Articles/Article');

exports.getArticles = (req, res) => {
	Article.find()
		.then((articles) => {
			res.status(200).json(articles);
		})
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.findOneArticle = (req, res) => {
	Article.findById(req.params.articleId)
		.then((article) => {
			res.status(200).json(article);
		})
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.newArticle = (req, res) => {
	Article.create({ ...req.body })
		.then(() => {
			res.status(201).json('Created successfully');
		})
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.updatedOneArticle = (req, res) => {
	Article.findByIdAndUpdate(req.params.articleId, { ...req.body }, { new: true })
		.then((article) => {
			res.status(200).json(article);
		})
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.deleteOneArticle = (req, res) => {
	Article.findByIdAndRemove(req.params.articleId)
		.then(() => res.status(200).json('Deleted successfully'))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};
