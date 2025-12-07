const express = require("express");
const { addEnrollment, getEnrollments } = require("../controllers/enrollController");

const enrollRouter = express.Router();

enrollRouter.post("/", addEnrollment);
enrollRouter.get("/", getEnrollments);

module.exports = { enrollRouter };
