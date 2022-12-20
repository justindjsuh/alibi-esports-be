const db = require('../database');
const Sequelize = require('sequelize');

const Team = db.define('team', {
  team_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
});

module.exports = Team;
