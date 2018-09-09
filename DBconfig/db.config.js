const mongoose = require('mongoose');

//requiring schemas
var StudentSchema = require('../Models/StudentSchema');
var EmployerSchema = require('../Models/EmployerSchema');

//registering models
mongoose.model('Student', StudentSchema);
mongoose.model('Employer', EmployerSchema);

//Connecting to db
mongoose.connect('mongodb://admin:root123@ds249992.mlab.com:49992/internship', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('DB connected');
});

module.exports = mongoose;