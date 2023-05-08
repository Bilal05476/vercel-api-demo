const User = require('../models/User');

async function get(req, res, next) {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

module.exports = { get };
