const router = require('express').Router();
const User = require('../../models/Users/User');
const { isLogged } = require('../../helpers/middlewares');

router.get('/', (req, res, next) => {
	User.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	User.findById(id)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.patch('/:id', (req, res, next) => {
	const { id } = req.params;
	User.findByIdAndUpdate(id, req.body, { new: true })
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
