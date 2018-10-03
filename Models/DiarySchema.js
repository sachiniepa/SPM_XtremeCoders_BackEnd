//import mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema definition
const DiarySchema = new Schema({
   
    name: {
        type: String,
        required: true
    },
    ITNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },    
    email: {
        type: String,
        required: true
    },
    internship_title: {
        type: String,
        required: true
    },
    Specialization: {
        type: String,
        required: true
    },
    From: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
    Training_party: {
        type: String,
        required: true
    },
    Training_desc: {
        type: String,
        required: true
    },
    Period_from: {
        type: String,
        required: true
    },
    Period_to: {
        type: String,
        required: true
    }
   
});

module.exports = DiarySchema;

