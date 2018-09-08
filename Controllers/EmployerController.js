var mongoose = require('../DBConfig/db.config');
var EmployerSchema = mongoose.model('Employer');
var nodemailer = require('nodemailer');

var EmployerController = function(){
    //Add employer details function. The input would be a employer type json
    this.addEmployer = function(data){
        return new Promise(function(resolve,reject){
            var employer = new EmployerSchema({
                ITNo : data.ITNo,
                name : data.name,
                address : data.address,
                supName : data.supName,
                supTitle : data.supTitle,
                startDate : data.startDate,
                noOfHours : data.noOfHours,
                expectedTasks : data.expectedTasks,
                tasksToBeLearned : data.tasksToBeLearned,
                externalSup : data.externalSup
            });

            employer.save().then(function(){
                resolve({status:201, message:"Employer Details Added!"});
            }).catch(function (reason) {
                reject({status:500, message:"Error - " + reason});
            });
        });
    };

    //Update the relevant employer with the given id
    this.updateEmployer = function (id,data) {
        return new Promise(function (resolve,reject) {
            EmployerSchema.update({_id:id},data).then(function(){
                resolve({status:200, message:"Employer details updated"});
            }).catch(function (err) {
                reject({status:500,message:"Error - " + err});
            });
        });
    };

    //Delete the relavent employer with the given id
    this.deleteEmployer = function(id){
        return new Promise(function(resolve,reject){
            EmployerSchema.remove({_id:id}).then(function(){
                resolve({status:200, message: "Employer Deleted!"});
            }).catch(function(err){
                reject({status:500, message : "Error - " + err});
            });
        });
    };

    //get all the employers from the database.
this.getAll = function() {
    return new Promise(function (resolve, reject) {
        EmployerSchema.find().exec().then(function (data) {
            resolve({status: 200, message: data});
        }).catch(function (err) {
            reject({status: 500, message: 'Error - ' + err});
        });
    });
};

//Returning the json object of the employer with the given name
this.getEmployerByName = function(name){
        return new Promise(function(resolve,reject){
            console.log(name);
            EmployerSchema.find({name:name}).exec().then(function(data){
                resolve({status:200, message:data});
            }).catch(function(err){
                reject({status:500, message:'Error - ' + err});
            });
        });
}

};

module.exports = new EmployerController();