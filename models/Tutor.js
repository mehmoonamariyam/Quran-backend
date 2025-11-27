const mongoose = require('mongoose');

const TutorSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  shortInfo: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tutor", TutorSchema);
