const { signup, login } = require("../controllers/authcontroller");

const express = require('express')

const authRouter = express.Router();

authRouter.post('/', signup )
authRouter.post('/log', login)

module.exports = {authRouter};