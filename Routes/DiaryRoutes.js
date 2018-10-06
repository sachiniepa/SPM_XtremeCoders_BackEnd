var express = require('express');
var router = express.Router();
var controller = require('../Controllers/DiaryController');

//HTTP method: POST  inputs: Details object
router.post('/', function (req, res) {
    console.log("aaaa");
    console.log(req.body);
    controller.addDetails(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(500).send(err.message);
    });
});

//HTTP method: POST  inputs: Records of the table object
// router.post('/', function (req, res) {
//     console.log("aaaa");
//     console.log(req.body);
//     controller.addRecord(req.body).then(function (data) {
//         res.status(data.status).send(data.message);
//     }).catch(function (err) {
//         res.status(500).send(err.message);
//     });
// });


//HTTP method: GET inputs: NON
router.get('/',function(req,res){
    controller.getAll().then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).message(err.message);
    });
});


//HTTP method: GET , inputs: @query_param id
router.get('/:id', function (req, res) {
    controller.getStudent(req.params.id).then(function (data) {
        res.status(data.status).send(data.data);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

//HTTP method: PUT , inputs: @query_param id, student json object(@req_body)
router.put('/:id', function (req, res) {
    controller.updateStudent(req.params.id, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});


module.exports = router;