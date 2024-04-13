// Controller (UserController.js)
const UserService = require("../services/UserService");

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
  },
  createUser: async (req, res) => {
    const newUser = req.body;
    const createdUser = await UserService.createUser(newUser);
    res.status(201).json(createdUser);
  },
};
