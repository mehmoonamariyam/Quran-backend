const express = require('express');
const { getAllTutors } = require('../controllers/tutorsController');

const tutorRouter = express.Router();

tutorRouter.get('/', getAllTutors)

module.exports = {tutorRouter}