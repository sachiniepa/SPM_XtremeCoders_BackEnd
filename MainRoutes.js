const express = require('express');
var Routes = express.Router();

var studentRoutes = require('./Routes/studentRoutes');
var employerRoutes = require('./Routes/EmployerRoutes');
var evaluationRoutes = require('./Routes/EvaluationRoutes');

Routes.use('/student/', studentRoutes);
Routes.use('/employers/', employerRoutes);
Routes.use('/evaluation/', evaluationRoutes);

module.exports = Routes;