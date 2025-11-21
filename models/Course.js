const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
       type: String,
        required: true
    },
    idealfor: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    textOnImage: {
        type: String,
        required: true
    },
    pngImage: {
        type: String,
        required: true
    },
    details: {
        type: [String],
        required: true
    },
    price: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    classesPerWeek: {
        type: String,
        required: true
    },
    classduration: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    assessment: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);
module.exports = {Course}