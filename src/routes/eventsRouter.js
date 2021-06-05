const express = require('express');

const router = express.Router();
const eventController = require('../controllers/eventsController');
const { authenticateUser, checkIfAdmin } = require('../middleware/auth');

router
	.get('/', eventController.getEvents)
	.post(authenticateUser, eventController.createEvent);

router
	.route('/:id')
	.get(authenticateUser, eventController.findEvent)
	.put(authenticateUser, checkIfAdmin, eventController.updateEvent)
	.delete(authenticateUser, checkIfAdmin, eventController.deleteEvent);

module.exports = router;
