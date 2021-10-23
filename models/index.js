const User = require("./user");
const Post = require("./journal");
const Meds = require("./meds");
const Calendar = require("./calendar");
// create individual files for your models and import them here

// Setup Associations
User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  User,
  Post,
  Meds,
  Calendar,
};
