const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = { Review }; // ✅ export as object
