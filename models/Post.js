// // models/Post.js
// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./index'); // Correctly import sequelize

// const Post = sequelize.define('Post', {
//   content: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// module.exports = Post;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Post;
