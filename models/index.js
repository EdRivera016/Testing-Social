// // models/index.js
// const { Sequelize } = require('sequelize');

// // Initialize Sequelize with your database credentials
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
// });

// // Test the database connection
// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection to the database has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// module.exports = {
//   sequelize,
//   Sequelize
// };


const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Post = require('./post');

const db = {
    Sequelize,
    sequelize,
    Post
};

db.sequelize.sync();

module.exports = db;
