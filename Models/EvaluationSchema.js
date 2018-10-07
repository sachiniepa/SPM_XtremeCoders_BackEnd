const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/Internships");
autoIncrement.initialize(connection);

const EvaluationSchema = new Schema({
    name : {
        type : String,
        required : [true,'Please enter a Student name']
    },

    sid : {
        type : String,
        required : true,
        minlength : [10, 'Please enter a valid Student ID number'],
        maxlength : [10, 'Please enter a valid phone number']
    },

    phone : {
        type : Number,
        required : [true, 'Please enter a phone number']
    },

    email : {
        type : String,
        required : [true,'Please enter an email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    EmployerName : {
        type : String,
        required : [true,'Please enter an Employer Name']
    },

    SupName : {
        type : String,
        required : [true,'Please enter a Supervisor Name']
    },

    dTitle: {
        type : String,
        required : [true,'Please enter a degree title']
    },

    Specialization : {
        type : String,
        required : [true,'Please enter a specialization']
    },

    duration : {
        type : String,
        required : [true,'Please enter a duration']
    },

    credits : {
        type : String,
        required : [true,'Please enter the number of credits']
    },

    IntTitle : {
        type : String,
        required : [true,'Please enter Internship Title']
    },

    comment1 : {
        type : String,
        required : [true, 'Please enter comments']
    },

    comment2 : {
        type : String,
        required : [true,'Please enter comments']
    },

    mProgress : {
        type : String,
        required : [true,'Please enter monthly progress']
    },

    fProgress : {
        type : String,
        required : [true,'Please enter the progress']
    },

    Viva : {
        type : String,
        required : [true,'Please enter viva marks']
    },

    Total : {
        type : String,
        required : [true,'Please enter the total']
    },

    fGrade : {
        type : String,
        required : [true,'Please enter final grade']
    },

    ExName : {
        type : String,
        required : [true,'Please enter examiner name']
    },

    Date : {
        type : Date,
        required :  true,
        default : Date.now()
    }
});

EvaluationSchema.plugin(autoIncrement.plugin,{model:'Evaluation',field:'evaluationNo'});
module.exports = EvaluationSchema;