const express = require('express');
const { getAllCourses, getSinglecourse } = require('../controllers/courseController');

const courseRouter = express.Router();

courseRouter.get('/', getAllCourses);
courseRouter.get('/:id', getSinglecourse);

module.exports = { courseRouter };
