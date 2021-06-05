const jwt = require('jsonwebtoken');

const secret = 'thisisareallypowerfulsecret';

exports.authenticateUser = async (req, res, next) => {
	try {

		if (!req.headers.authorization) {
			return res.status(401).json({
				status: 'Unauthorized',
				message: 'Authorization header is required!',
			});
		}

		const tokenArray = req.headers.authorization.split(' ');

		if (tokenArray[0] !== 'Bearer') {
			return res.status(401).json({
				status: 'Unauthorized',
				message: 'Authorization format must be: Bearer <token>',
			});
		}

		const token = tokenArray[1];
		const successfulToken = jwt.verify(token, secret);

		if (!successfulToken) {
			return res.status(401).json({
				status: 'authorization failed',
				message: 'Invalid authorization. Please relogin login!',
			});
		}
		req.user = successfulToken;
		next();
	} catch (err) {
		return res.status(500).json({
			status: 'Internal Server Error',
			message: err,
		});
	}
};

exports.checkIfAdmin = (req, res, next) => {
	if (req.user.role !== 'admin') {
		return res.status(403).json({
			status: 'Forbidden',
			message:
				'The server understood the request, but is refusing to authorize it',
		});
	}

	next();
};
