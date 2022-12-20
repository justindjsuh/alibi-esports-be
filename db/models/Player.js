const Sequelize = require('sequelize');
const db = require('../database');

const Player = db.define('player', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ign: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z0-9_]{3-16}+#+[a-zA-Z0-9_]{3,5}$/,
    },
  },
  isCaptain: {
    type: Boolean,
    allowNull: false,
  },
  team: {
    type: Sequelize.STRING,
  },
  rank: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
  discord: {
    type: Sequelize.STRING,
    validate: {
      is: /[a-zA-Z0-9_]+#+\d{4}$/,
    },
  },
});

module.exports = Player;
