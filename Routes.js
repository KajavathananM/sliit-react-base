var express         = require("express");
var Routes          = express.Router();
var CourseRoute       = require('./app/API/Course/Course.Route');
var SubjectRoute       = require('./app/API/Subject/Subject.Route');


Routes.use('/course/',CourseRoute);
Routes.use('/subject/',SubjectRoute);

module.exports = Routes;