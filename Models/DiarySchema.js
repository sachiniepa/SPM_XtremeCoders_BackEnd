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
        required: [true,'Please enter a phone No'],
        match: [/^\d{10}$/, 'Please enter a valid phone No']
    },    
    email: {
        type: String,
        required : [true,'Please enter an email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
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
        type: String
    },
    Training_desc: {
        type: String
    },
    Period_from: {
        type: String
    }
   
});

module.exports = DiarySchema;

