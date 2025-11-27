const { signup } = require("../controllers/authcontroller");

const express = require('express')

const authRouter = express.Router();

authRouter.post('/', signup )

module.exports = {authRouter};