const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRESURI, 
    {dialect: 'postgres',
});

module.exports = sequelize;
