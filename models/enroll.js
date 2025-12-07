const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    countryCode: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    course: { type: String, required: true },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Enrollment = mongoose.model("Enrollment", enrollSchema);

module.exports = { Enrollment };
