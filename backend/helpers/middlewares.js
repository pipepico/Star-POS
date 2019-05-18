exports.isLogged = (req, res, next) => {
	if (!req.isAuthenticated()) return res.status(401).json({ msg: "You're not logged" });
	next();
};
