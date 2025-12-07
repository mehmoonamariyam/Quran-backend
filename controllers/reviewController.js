const { Review } = require('../models/Review');

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addReview = async (req, res) => {
  try {
    const { name, review, rating } = req.body;
    if (!name || !review || !rating) return res.status(400).json({ message: 'All fields are required' });

    const newReview = new Review({ name, review, rating });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getReviews, addReview, deleteReview };
