const express = require("express");
const { getReviews, addReview, deleteReview } = require("../controllers/reviewController");

const reviewRouter = express.Router();

reviewRouter.get("/", getReviews);
reviewRouter.post("/", addReview);
reviewRouter.delete("/:id", deleteReview);

module.exports = { reviewRouter }; // export as object for consistency
