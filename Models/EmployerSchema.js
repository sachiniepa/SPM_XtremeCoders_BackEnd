//importing mongoose and auto-increment modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/Internships");
autoIncrement.initialize(connection);

//Schema definition
const EmployerSchema = new Schema({
    ITNo : {
        type : String,
        required : [true,'Please enter a Student Registration Number']
    },

    name : {
        type : String,
        required : [true,'Please enter a name']
    },

    address : {
        type : String,
        required : [true,'Please enter aa address']
    },

    supName : {
        type : String,
        required : [true,'Please enter supervisor name']
    },

    supTitle : {
        type : String,
        required : [true,'Please enter supervisor title']
    },

    startDate : {
        type : Date,
        required : [true,'Please enter start date']
    },

    noOfHours : {
        type : Number,
        required : [true,'Please enter number of hours']
    },

    expectedTasks : {
        type : String,
        required : [true,'Please enter expected tasks']
    },

    tasksToBeLearned : {
        type : String,
        required : [true,'Please enter what the student learnt']
    },

    externalSup : {
        type : String,
        required : [true,'Please enter external Supplier name']
    }
});

EmployerSchema.plugin(autoIncrement.plugin,{model:'Employer',field:'employerNo'});

module.exports = EmployerSchema;
