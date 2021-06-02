const event = require('../models/event')

exports.getEvents = async (req, res) => {
  try {
    let documents = await event.find()
    res.json(documents)
  } catch (err) {
    res.send(err.message)
  }
}

exports.createEvent = async (req, res) => {
  try {
    await event.create(req.body)
    res.redirect('/')
  } catch (err) {
    res.send(err.message)
  }
}

exports.findEvent = async (req, res) => {
  try {
    const document = await event.findById(req.params.id)
    res.json(document)
  } catch (err) {
    res.send(err.message)
  }
}

exports.updateEvent = async (req, res) => {
  try {
    const document = await event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(document)
  } catch (err) {
    res.send(err.message)
  }
}

exports.deleteEvent = async (req, res) => {
  try {
    const document = await event.findByIdAndDelete(req.params.id)
    res.send(`Event: '${document.title}' removed successfully`)
  } catch (err) {
    res.send('An error occurred.')
  }
}
