var mongoose = require('../DBconfig/db.config');
var DiarySchema = mongoose.model('Diary');

var DiaryController = function () {
    //add  details function, inputs: JSON object of diary type
    this.addDetails = function (diaryInstance) {
        console.log(diaryInstance);
        return new Promise(function(resolve, reject){
            var diary = new  DiarySchema({               
                name: diaryInstance.name,
                ITNo: diaryInstance.ITNo,
                address: diaryInstance.address,
                contactNo: diaryInstance.contactNo,
                email: diaryInstance.email,
                internship_title:diaryInstance.internship_title,               
                Specialization: diaryInstance.Specialization,
                From:diaryInstance.From,
                To: diaryInstance.To,
                Training_party: diaryInstance.Training_party,
                Training_desc: diaryInstance.Training_desc,
                Period_from: diaryInstance.Period_from,
                Period_to: diaryInstance.Period_to
            });
            diary.save().then(function () {
                resolve({status: 201, message: 'Record added'});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    }

    //add  details function, inputs: JSON object of student type
    // this.addRecord = function (recordInstance) {
    //     console.log(recordInstance);
    //     return new Promise(function(resolve, reject){
    //         var record = new  DiarySchema({               
    //             Training_party: recordInstance.Training_party,
    //             Training_desc: recordInstance.Training_desc,
    //             Period_from: recordInstance.Period_from,
    //             Period_to: recordInstance.Period_to
    //         });
    //         record.save().then(function () {
    //             resolve({status: 201, message: 'Record added'});
    //         }).catch(function (reason) {
    //             reject({status: 500, message:'Error occured'+ reason});
    //         });
    //     });
    // }

    //get all the employers from the database.
    this.getAll = function() {
        return new Promise(function (resolve, reject) {
            DiarySchema.find().exec().then(function (data) {
                resolve({status: 200, message: data});
            }).catch(function (reason) {
                reject({status: 500, message:'Error occured'+ reason});
            });
        });
    };

    //getting a single student by id
    this.getRecord = function (id) {
        return new Promise(function (resolve, reject) {
            DiarySchema.find({_id: id}).exec().then(function (record) {
                resolve({status: 200, data: record});
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


   

}

module.exports = new DiaryController();