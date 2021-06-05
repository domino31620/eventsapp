const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const user = require('../models/user');
const secret = 'reallysupersectretstring';
const expiry = 3600;
const saltRounds = 10;

exports.newUserSignup = async (req, res) => {
	try {
		const existingUser = await user.findOne({ username: req.body.username });
		if (!existingUser) {
			const passwordIsHashed = await bcrypt.hash(req.body.password, saltRounds);

			const newUser = await user.create({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				username: req.body.username,
				email: req.body.email,
				role: req.body.role,
				password: passwordIsHashed,
			});
			//Creating the Token
			const token = jwt.sign(
				{
					id: newUser._id,
					username: newUser.username,
					firstName: newUser.firstName,
					lastName: newUser.lastName,
					email: newUser.email,
					role: newUser.role,
				},
				secret,
				{ expiresIn: expiry }
			);
			//Sending token to user
			res.status(200).json({
				status: 'success',
				message: 'User Succesfully Added!',
				token,
			});
		} else {
			res.status(400).json({
				status: 'bad request',
				message: 'username already exists.',
			});
		}
	} catch (err) {
		res.status(500).json({
			status: 'Internal Server Error',
			message: err,
		});
	}
};

exports.loginUser = async (req, res) => {
	try {
		const prevUser = await user.findOne({ username: req.body.username });

		if (prevUser) {
			const prevUserPassword = await bcrypt.compare(
				req.body.password,
				prevUser.password
			);

			if (prevUserPassword && req.body.email === prevUser.email) {
				const token = jwt.sign(
					{
						id: prevUser.id,
						username: prevUser.username,
						firstName: prevUser.firstName,
						lastName: prevUser.lastName,
						role: prevUser.role,
					},
					secret,
					{ expiresIn: expiry }
				);

				res.status(200).json({
					status: 'success',
					message: 'Login successful',
					token,
				});
			} else {
				res.status(401).json({
					status: 'unauthorized',
					message: 'authentication error',
				});
			}
		} else {
			res.status(400).json({
				status: 'bad request',
				message: 'Username not found!',
			});
		}
	} catch (err) {
		res.status(500).json({
			status: 'internal server error',
			message: err,
		});
	}
<<<<<<< HEAD
};
=======
};
>>>>>>> 23c202cb90c5c6f04012964b08b3375e413ace57
