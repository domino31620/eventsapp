const axios = require('axios');
const event = require('../models/event');

exports.getEvents = async (req, res) => {	
	try {
		let documents = await event.find();
		res.json(documents);
	} catch (err) {	
		res.send(500).json({ message: err.message });
	}
};
exports.createEvent = function (req, res) {
	let query = req.body.category;
	let api = 'https://imagegen.herokuapp.com/?category=';
	let callUrl = api + query;
	axios
		.get(callUrl)
		.then((response) => {
			req.body.image = response.data.image;
			event.create(
				{
					title: req.body.title,
					cost: req.body.cost,
					category: req.body.category,
					image: req.body.image,
				},
				(err, newEvent) => {
					if (err) {
						return res.status(500).json({ message: err });
					} else {
						return res
							.status(200)
							.json({ message: 'New event created!', newEvent });
					}
				}
			);
		})
		.catch((error) => {
			console.log(error);
		});
};

exports.findEvent = async (req, res) => {
	try {
		const document = await event.findById(req.params.id);
		res.json(document);
	} catch (err) {
		res.send(err.message);
	}
};
exports.updateEvent = async (req, res) => {
	try {
		const document = await event.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.json(document);
	} catch (err) {
		res.send(err.message);
	}
};
exports.deleteEvent = async (req, res) => {
	try {
		const document = await event.findByIdAndDelete(req.params.id);
		res.send(`Event: '${document.title}' removed successfully`);
	} catch (err) {
		res.send('An error occurred.');
	}
};