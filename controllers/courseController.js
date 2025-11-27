const { Course } = require("../models/Course");

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        return res.json(courses);
    } catch (error) {
        return res.status(500).json({ error: "Server error while fetching courses" });
    }
};

const getSinglecourse = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        return res.json(course);

    } catch (error) {
        return res.status(400).json({ error: "Invalid course ID format" });
    }
};

// const createCourse = async(req, res) => {
    
// }

module.exports = { getAllCourses, getSinglecourse };
