const event = require('../models/event');

exports.redirect = (req, res) => {
	res.redirect('/events');
};

exports.search = async (req, res) => {
	try {
		let documents = await event.find({ category: req.query.category });
		if (documents.length !== 0) {
			return res.json(documents);
		}
		res.send(`No events with the category '${req.query.category}' were found.`);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
