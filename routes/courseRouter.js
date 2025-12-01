const express = require('express');
const { getAllCourses, getSinglecourse, createCourse, updateCourse } = require('../controllers/courseController');
const courseRouter = express.Router();

courseRouter.get('/', getAllCourses);
courseRouter.get('/:id', getSinglecourse);
courseRouter.post('/', createCourse);
courseRouter.put('/', updateCourse)

module.exports = {courseRouter}