const mongoose = require('mongoose');

//requiring schemas
var StudentSchema = require('../Models/StudentSchema');
var EmployerSchema = require('../Models/EmployerSchema');
var EvaluationSchema = require('../Models/EvaluationSchema');
var Diaryschema = require('../Models/DiarySchema');


//registering models
mongoose.model('Student', StudentSchema);
mongoose.model('Employer', EmployerSchema);
mongoose.model('Evaluation', EvaluationSchema);
mongoose.model('Diary',Diaryschema);

//Connecting to db
mongoose.connect('mongodb://localhost:27017/internship', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('DB connected');
});

module.exports = mongoose;