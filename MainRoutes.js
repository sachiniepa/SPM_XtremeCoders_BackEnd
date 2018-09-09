const express = require('express');
var Routes = express.Router();

var studentRoutes = require('./Routes/studentRoutes');
var employerRoutes = require('./Routes/EmployerRoutes');

Routes.use('/student/', studentRoutes);
Routes.use('/employers/', employerRoutes);

module.exports = Routes;