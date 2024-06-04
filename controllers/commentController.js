const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const { content } = req.body;
    await Comment.create({ content, UserId: req.user.id, PostId: req.params.postId });
    res.redirect(`/posts/${req.params.postId}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Other comment controller methods (edit, delete)
