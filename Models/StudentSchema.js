//import mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema definition
const StudentScheme = new Schema({
    ITNo: {
        type: String,
        required : [true,'Please enter a IT number'],
        match: [/(I|E|B)(T|N|M)\d{6}/i, 'Please enter a valid IT No']// Checking whether a valid IT number is entered
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
        required: [true,'Please enter a phone No'],
        match: [/^\d{10}$/, 'Please enter a valid phone No']// Checking whether a valid phone number is entered

    },
    mobileNo: {
        type: String,
        required: [true,'Please enter a phone No'],
        match: [/^\d{10}$/, 'Please enter a valid phone No']
    },
    email: {
        type: String,
        required : [true,'Please enter an email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']// Checking whether a  valid enail address is entered
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

