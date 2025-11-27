const Tutor = require("../models/Tutor");

// GET all tutors
const GetAllTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tutors", error });
  }
};

// POST a new tutor
const AddTutor = async (req, res) => {
  try {
    const tutor = new Tutor(req.body);
    const savedTutor = await tutor.save();
    res.status(201).json(savedTutor);
  } catch (error) {
    res.status(500).json({ message: "Failed to add tutor", error });
  }
};

// PATCH (update) a tutor
const UpdateTutor = async (req, res) => {
  try {
    const updatedTutor = await Tutor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTutor);
  } catch (error) {
    res.status(500).json({ message: "Failed to update tutor", error });
  }
};

// DELETE a tutor
const DeleteTutor = async (req, res) => {
  try {
    await Tutor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Tutor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete tutor", error });
  }
};

module.exports = {GetAllTutors, AddTutor, UpdateTutor, DeleteTutor};
