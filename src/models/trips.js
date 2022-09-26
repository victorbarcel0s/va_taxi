const Sequelize = require("sequelize");
const database = require("../db/");

const Trip = database.define("trip", {
  usnername: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destiny: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
