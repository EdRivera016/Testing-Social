const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Correct import
const User = require('./User');
const Post = require('./Post');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Comment.belongsTo(User);
Comment.belongsTo(Post);

module.exports = Comment;
