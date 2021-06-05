<<<<<<< HEAD
const event = require('../models/event')
const event = require('../models/event');

exports.redirect = (req, res) => {
  res.redirect('/events');
=======
const event = require('../models/event');

exports.redirect = (req, res) => {
>>>>>>> 23c202cb90c5c6f04012964b08b3375e413ace57
	res.redirect('/events');
};

exports.search = async (req, res) => {
<<<<<<< HEAD
    try {
      let documents = await event.find({ category: req.query.category })
    if (documents.length !== 0) {
        return res.json(documents)
    }
      res.send(`No events with the category '${req.query.category}' were found.`)
  } catch (err) {
    res.send(err.message)
  }
}
=======
>>>>>>> 23c202cb90c5c6f04012964b08b3375e413ace57
	try {
		let documents = await event.find({ category: req.query.category });
		if (documents.length !== 0) {
			return res.json(documents);
		}
		res.send(`No events with the category '${req.query.category}' were found.`);
	} catch (err) {
		res.status(500).json({ message: err.message });
<<<<<<< HEAD
	};
=======
	}
};
>>>>>>> 23c202cb90c5c6f04012964b08b3375e413ace57
