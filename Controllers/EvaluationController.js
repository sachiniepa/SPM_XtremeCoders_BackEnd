var mongoose = require('../DBConfig/db.config');
var EvaluationSchema = mongoose.model('Evaluation');
var nodemailer = require('nodemailer');

var EvaluationController = function() {
    //Add evaluation details function. The input would be a employer type json
    this.addEvaluation = function (data) {
        return new Promise(function (resolve, reject) {
            var evaluation = new EvaluationSchema({
                name: data.name,
                sid: data.sid,
                phone: data.phone,
                email: data.email,
                EmployerName: data.EmployerName,
                SupName: data.SupName,
                dTitle: data.dTitle,
                Specialization: data.Specialization,
                duration: data.duration,
                credits: data.credits,
                IntTitle: data.IntTitle,
                comment1: data.comment1,
                comment2: data.comment2,
                mProgress: data.mProgress,
                fProgress: data.fProgress,
                Viva: data.Viva,
                Total: data.Total,
                fGrade: data.fGrade,
                ExName: data.ExName,
                Date: data.Date
            });

            evaluation.save().then(function () {
                resolve({status: 201, message: "Evaluation Details Added!"});
            }).catch(function (reason) {
                reject({status: 500, message: "Error - " + reason});
            });
        });
    };

    //Update an evaluation with a given id
    this.updateEvaluation = function (id,data) {
        return new Promise(function (resolve,reject) {
            EvaluationSchema.update({_id:id},data).then(function(){
                resolve({status:200, message:"Evaluation details updated"});
            }).catch(function (err) {
                reject({status:500,message:"Error - " + err});
            });
        });
    };

    //Delete an evaluation with the given id
    this.deleteEvaluation = function(id){
        return new Promise(function(resolve,reject){
            EvaluationSchema.remove({_id:id}).then(function(){
                resolve({status:200, message: "Evaluation Deleted!"});
            }).catch(function(err){
                reject({status:500, message : "Error - " + err});
            });
        });
    };

    //get all the employers from the database.
    this.getAll = function() {
        return new Promise(function (resolve, reject) {
            EvaluationSchema.find().exec().then(function (data) {
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

}

module.exports = new EvaluationController();