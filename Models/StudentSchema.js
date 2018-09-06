//import mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema definition
const StudentScheme = new Schema({
    ITNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    homeNo: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    cgpa: {
        type: Number,
        required: true
    }
});

module.exports = StudentScheme;

