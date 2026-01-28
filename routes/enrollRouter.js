const express = require("express");
const { addEnrollment, getEnrollments } = require("../controllers/enrollController");

const enrollRouter = express.Router();

// Submit a new enrollment
enrollRouter.post("/", addEnrollment);

// Get all enrollments (for admin)
enrollRouter.get("/", getEnrollments);

module.exports = { enrollRouter };
