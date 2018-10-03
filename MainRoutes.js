const express = require('express');
var Routes = express.Router();

var studentRoutes = require('./Routes/studentRoutes');
var employerRoutes = require('./Routes/EmployerRoutes');
var diaryRoutes = require('./Routes/DiaryRoutes');

Routes.use('/student/', studentRoutes);
Routes.use('/employers/', employerRoutes);
Routes.use('/diary/',diaryRoutes);


module.exports = Routes;