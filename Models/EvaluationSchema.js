const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/Internships");
autoIncrement.initialize(connection);

const EvaluationSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    sid : {
        type : String,
        required : true
    },

    phone : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    EmployerName : {
        type : String,
        required : true
    },

    SupName : {
        type : String,
        required : true
    },

    dTitle: {
        type : String,
        required : true
    },

    Specialization : {
        type : String,
        required : true
    },

    duration : {
        type : String,
        required : true
    },

    credits : {
        type : String,
        required : true
    },

    IntTitle : {
        type : String,
        required : true
    },

    comment1 : {
        type : String,
        required : true
    },

    comment2 : {
        type : String,
        required : true
    },

    mProgress : {
        type : String,
        required : true
    },

    fProgress : {
        type : String,
        required : true
    },

    Viva : {
        type : String,
        required : true
    },

    Total : {
        type : String,
        required : true
    },

    fGrade : {
        type : String,
        required : true
    },

    ExName : {
        type : String,
        required : true
    },

    Date : {
        type : Date,
        required :  true
    }
});

EvaluationSchema.plugin(autoIncrement.plugin,{model:'Evaluation',field:'evaluationNo'});
module.exports = EvaluationSchema;