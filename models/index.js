const User = require("./user");
const Journal = require("./journal");
const Meds = require("./meds");
const Calendar = require("./calendar");
// create individual files for your models and import them here

// Setup Associations
User.hasMany(Journal);
Journal.belongsTo(User);

// User.hasMany(Meds);
// Meds.belongsTo(User);

module.exports = {
  User,
  Journal,
  Meds,
  Calendar,
};
