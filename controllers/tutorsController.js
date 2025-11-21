const tutors = require('../data/tutors.json');

const getAllTutors = (req, res)=>{
    res.json(tutors)
}

module.exports = {getAllTutors}