const express = require('express');
var Routes = express.Router();

var studentRoutes = require('./Routes/studentRoutes');
var employerRoutes = require('./Routes/EmployerRoutes');
<<<<<<< HEAD
var evaluationRoutes = require('./Routes/EvaluationRoutes');

Routes.use('/student/', studentRoutes);
Routes.use('/employers/', employerRoutes);
Routes.use('/evaluation/', evaluationRoutes);
=======
var diaryRoutes = require('./Routes/DiaryRoutes');

Routes.use('/student/', studentRoutes);
Routes.use('/employers/', employerRoutes);
Routes.use('/diary/',diaryRoutes);

>>>>>>> 431e4c0252912c8df42ac1115a37574acace242c

module.exports = Routes;