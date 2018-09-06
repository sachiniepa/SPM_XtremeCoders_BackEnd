var mongoose = require('../DBconfig/db.config');
var StudentSchema = mongoose.model('Student');
var nodemailer = require('nodemailer');

var studentController = function () {
    //add student details function, inputs: JSON object of student type
    this.addStudent = function (studentInstance) {
        console.log(studentInstance);
        return new Promise(function(resolve, reject){
            var student = new  StudentSchema({
                ITNo: studentInstance.ITNo,
                name: studentInstance.name,
                address: studentInstance.address,
                homeNo: studentInstance.homeNo,
                mobileNo:studentInstance.mobileNo,
                email: studentInstance.email,
                semester: studentInstance.semester,
                year:studentInstance.year,
                cgpa: studentInstance.cgpa
            });
            student.save().then(function () {
                resolve({status: 201, message: 'Student details registered'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //get all registered students from the db
    this.getStudents = function () {
        return new Promise(function (resolve, reject) {
            StudentSchema.find().exec().then(function (studentData) {
                resolve({status: 200, data: studentData});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //getting a single student by id
    this.getStudent = function (id) {
        return new Promise(function (resolve, reject) {
            StudentSchema.find({_id: id}).exec().then(function (student) {
                resolve({status: 200, data: student});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //search students by IT number
    this.getByITNo = function (ITNo) {
        return new Promise(function (resolve, reject) {
            StudentSchema.find({ITNo: ITNo}).exec().then(function (student) {
                resolve({status: 200, data: student});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //update student details
    this.updateStudent = function (id, student) {
        return new Promise(function (resolve, reject) {
            StudentSchema.update({_id: id}, student).then(function () {
                resolve({status: 200, message: 'Student details updated'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //deleting students
    this.deleteStudent = function (id) {
        return new Promise(function (resolve, reject) {
            StudentSchema.remove({_id: id}).then(function () {
                resolve({status: 200, message: 'Student deleted'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        })

    }
    //sending email using nodemailer  module
    this.sendMail = function (mailDetails) {
        console.log(mailDetails);
        return new Promise(function (resolve, reject) {
            // create reusable transporter object
            var transporter = nodemailer.createTransport({
                service: 'gmail',//use gmail service
                secure: false,
                auth: {
                    user: mailDetails.fromEmail,//gmail account username
                    pass: mailDetails.password //gmail account password
                },
                tls:{
                    rejectUnauthorized: false
                }
            });
            //setting up email data
            var mailOptions = {
                from: mailDetails.fromEmail,//sender address
                to: mailDetails.toEmail,//list of receivers
                subject: 'Sending Email using Node.js',//subject of the email
                text: 'That was easy!'//body in plain text
            };

            //console.log(mailOptions);
            //send mail using defined transport object
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    reject({status: 500, message: error});
                } else {
                    resolve({status: 200, message: info.response});
                }
            });
        })
    }

}

module.exports = new studentController();