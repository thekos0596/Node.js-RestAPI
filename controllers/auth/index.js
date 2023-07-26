const { registerUser } = require("./registerUser");
const { logInUser } = require("./logInUser");
const { logOutUser } = require("./logOutUser");
const { getCurrentUser } = require("./getCurrentUser");
const { updateUserSubscription } = require("./updateUserSubscription");
const { updateAvatar } = require("./updateAvatar");

module.exports = {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
  updateUserSubscription,
  updateAvatar,
};
