const express = require("express");
const auth = require("../middlewares/auth");
const checkAdmin = require("../middlewares/checkAdmin");
const { getAllUsers, deleteUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", auth, checkAdmin, getAllUsers);
userRouter.delete("/:id", auth, checkAdmin, deleteUser);
module.exports = { userRouter };
