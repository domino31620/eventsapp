const express = require('express')
const router = express.Router()
const eventsController = require('../controllers/eventsController')

router.get('/', eventsController.getEvents)

/** Create new Event */
router.post('/', eventsController.createEvent)

// Get Event by ID
router.get('/:id', eventsController.findEvent)

/** Get specific event by id and update */
router.put('/:id', eventsController.updateEvent)

/** Get specific event by id and delete */
router.delete('/:id', eventsController.deleteEvent)

module.exports = router