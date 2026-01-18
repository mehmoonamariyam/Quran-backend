
const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // password hide
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};
// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully", id });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};
module.exports = { getAllUsers, deleteUser };
