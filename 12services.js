// Services (UserService.js)
const User = require("../models/User");

module.exports = {
  getAllUsers: async () => {
    return await User.find();
  },
  createUser: async (userData) => {
    return await User.create(userData);
  },
};
