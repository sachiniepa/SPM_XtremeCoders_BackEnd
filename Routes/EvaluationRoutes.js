var express = require('express');
var router = express.Router();
var controller = require('../Controllers/EvaluationController');

//HTTP method : POST
//Inputs : Evaluation object
router.post('/',function(req,res){
    console.log('inside routes');
    controller.addEvaluation(req.body).then(function(data){
        res.status(data.status).send(data.message);
        console.log('success');
    }).catch(function(err){
        res.status(500).send(err.message);
    });
});

//HTTP method : PUT
//Inputs : id of the evaluation(req.params.id), new details(req.body)
router.put('/:id',function(req,res){
    controller.updateEvaluation(req.params.id,req.body).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

//HTTP method : DELETE
//Inputs : id of the evaluation(req.params.id)
router.delete('/:id',function(req,res){
    controller.deleteEvaluation(req.params.id).then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

//HTTP method : GET
//Inputs : no inputs
router.get('/',function(req,res){
    controller.getAll().then(function(data){
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).message(err.message);
    });
});

//HTTP method : GET
//Inputs : name of the employer(req.params.name)
router.get('/:name',function(req,res){
    controller.getEmployerByName(req.params.name).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function(err){
        res.status(err.status).send(err.message);
    });
});

module.exports = router;