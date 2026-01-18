const express = require("express");
const { getReviews, addReview, deleteReview, approveReview, getAllReviews } = require("../controllers/reviewController");
const auth = require("../middlewares/auth");
const checkAdmin = require("../middlewares/checkAdmin");

const reviewRouter = express.Router();


reviewRouter.get("/all", auth, checkAdmin, getAllReviews);
reviewRouter.get("/", getReviews);
reviewRouter.post("/", addReview);
reviewRouter.delete("/:id", deleteReview);
reviewRouter.put("/:id/approve", auth, checkAdmin, approveReview);
module.exports = { reviewRouter };
