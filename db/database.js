const Sequelize = require('sequelize');

const db = new Sequelize(DATABASE_URI, { logging: false });

module.exports = db;
