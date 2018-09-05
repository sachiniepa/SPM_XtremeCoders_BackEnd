const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/Internships");
autoIncrement.initialize(connection);

const EmployerSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    },

    supName : {
        type : String,
        required : true
    },

    supTitle : {
        type : String,
        required : true
    },

    startDate : {
        type : Date,
        required : true
    },

    noOfHours : {
        type : Number,
        required : true
    },

    expectedTasks : {
        type : String,
        required : true
    },

    tasksToBeLearned : {
        type : String,
        required : true
    },

    externalSup : {
        type : String,
        required : true
    }
});

EmployerSchema.plugin(autoIncrement.plugin,{model:'Employer',field:'employerNo'});

module.exports = EmployerSchema;
