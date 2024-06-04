// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const { Post } = require('../models/Post.js');

// Create a new post
router.post('/', async (req, res) => {
  try {
    const { post } = req.body;
    if (!post) {
      return res.status(400).json({ error: 'Post content is required' });
    }
    const newPost = await Post.create({ content: post });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const postController = require('../controllers/postController');

// router.post('/posts', postController.createPost);
// router.get('/posts', postController.getPosts);

// // Add other routes as needed

// module.exports = router;
