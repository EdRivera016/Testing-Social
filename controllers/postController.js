// const Post = require('../models/post');

// exports.createPost = async (req, res) => {
//     try {
//         const { title, content } = req.body;
//         const post = await Post.create({ title, content });
//         res.status(201).json(post);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to create post' });
//     }
// };

// exports.getPosts = async (req, res) => {
//     try {
//         const posts = await Post.findAll();
//         res.status(200).json(posts);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to retrieve posts' });
//     }
// };

// // Add other CRUD operations as needed

const Post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({ title, content });
        res.redirect('/');  // Redirect back to home page after creation
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
};
