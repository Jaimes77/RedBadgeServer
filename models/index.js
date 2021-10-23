const User = require("./user");
const Post = require("./journal");
const Meds = require("./meds");
const Calendar = require("./calendar");
// create individual files for your models and import them here

// Setup Associations

module.exports = {
  User,
  Post,
  Meds,
  Calendar,
};
