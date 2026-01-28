const { Enrollment } = require("../models/enroll");

/* ===============================
   ADD ENROLLMENT
================================ */
const addEnrollment = async (req, res) => {
  try {
    const enrollment = new Enrollment({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      countryCode: req.body.countryCode,
      phone: req.body.phone,
      age: req.body.age,
      gender: req.body.gender,
      course: req.body.course,
      notes: req.body.notes,
    });

    const savedEnrollment = await enrollment.save();

    res.status(201).json({
      message: "Enrollment submitted successfully",
      enrollment: savedEnrollment,
    });
  } catch (error) {
    console.error("Enrollment Error:", error.message);
    res.status(500).json({
      message: "Enrollment submission failed",
    });
  }
};

/* ===============================
   GET ALL ENROLLMENTS (ADMIN)
================================ */
const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.status(200).json(enrollments);
  } catch (error) {
    console.error("Fetch Enrollments Error:", error.message);
    res.status(500).json({
      message: "Failed to fetch enrollments",
    });
  }
};

module.exports = {
  addEnrollment,
  getEnrollments,
};
