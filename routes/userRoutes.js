const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/profile', authController.authenticate, userController.profile);
// Other routes for editing profile

module.exports = router;
