const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../helpers/passport');
const { isLogged } = require('../helpers/middlewares');

router.post('/signup', (req, res, next) => {
	const { password } = req.body;
	User.register(req.body, password)
		.then((user) => res.status(200).json(user))
		.catch((err) => res.status(500).json(err));
});

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, infoErr) => {
		if (err) return res.status(500).json({ err, infoErr });
		if (!user) return res.status(401).json({ msg: "This user doesn't exist" });
		req.logIn(user, (err) => {
			if (err) return res.status(500).json(err);
			res.status(200).json(user);
		});
	})(req, res, next);
});

router.get('/private', isLogged, (req, res, next) => {
	res.status(200).json({ msg: 'You did it' });
});

router.get('/logout', (req, res, next) => {
	req.logOut();
	req.status(200).json({ msg: 'Logout' });
});

router.get('/profile', isLogged, (req, res, next) => {
	req.status(200).json(req.user);
});

module.exports = router;
