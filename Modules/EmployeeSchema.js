const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/Internships");
autoIncrement.initialize(connection);

const EmployeeSchema = new Schema({
    name : {
        type: String,
        required: true
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
    }
});

EmployeeSchema.plugin(autoIncrement.plugin,{model:'Employee',field:'employeeNo'});

module.exports = EmployeeSchema;
