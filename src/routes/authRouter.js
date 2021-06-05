const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.newUserSignup);

router.post('/login', authController.loginUser);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 23c202cb90c5c6f04012964b08b3375e413ace57
