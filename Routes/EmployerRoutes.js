var express = require('express');
var router = express.Router();
var controller = require('../Controllers/EmployerController');

router.post('/',function(req,res){
    controller.addEmployer(req.body).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(500).send(err.message);
    });
});

router.put('/:id',function(req,res){
    controller.updateEmployer(req.params.id,req.body).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

router.delete('/:id',function(req,res){
    controller.deleteEmployer(req.params.id).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

router.get('/',function(req,res){
    controller.getAll().then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).message(err.message);
    });
});

router.get('/:name',function(req,res){
    controller.getEmployerByName(req.params.name).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

module.exports = router;