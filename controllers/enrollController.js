const { Enrollment } = require("../models/enroll");

const addEnrollment = async (req, res) => {
  try {
    const newEnroll = new Enrollment(req.body);
    const saved = await newEnroll.save();
    res.status(201).json({ message: "Enrollment submitted successfully", enrollment: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit enrollment", error: err.message });
  }
};

const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.status(200).json(enrollments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch enrollments", error: err.message });
  }
};

module.exports = { addEnrollment, getEnrollments };
