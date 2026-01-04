const express = require('express');
const { getAllCourses, getSinglecourse, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const auth = require("../middlewares/auth");
const checkAdmin = require("../middlewares/checkAdmin");
const courseRouter = express.Router();

courseRouter.get('/', getAllCourses);
courseRouter.get('/:id', getSinglecourse);
courseRouter.post('/', auth, checkAdmin, createCourse);
courseRouter.put('/:id', auth, checkAdmin, updateCourse);
courseRouter.delete('/:id', auth, checkAdmin, deleteCourse)

module.exports = {courseRouter}