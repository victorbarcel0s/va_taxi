const Sequelize = require("sequelize");
const database = require("../db/");

const Trip = database.define("trips", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destiny: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destiny_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Trip;
