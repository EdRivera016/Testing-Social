const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authController = require('../controllers/authController');

router.post('/posts/:postId/comments', authController.authenticate, commentController.addComment);
// Other routes for editing and deleting comments

module.exports = router;
