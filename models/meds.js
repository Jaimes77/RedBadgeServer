const { DataTypes } = require("sequelize");
const db = require("../db");

const Meds = db.define("meds", {
  medname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  frequency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dose: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Meds;
