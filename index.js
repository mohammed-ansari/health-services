var express = require('express');
var bodyParser = require('body-parser');
var AWS = require("aws-sdk");

/**
 * update AWS config
 */
AWS.config.loadFromPath('./config/config.json');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var patientController = require('./controllers/patient-controller');
var appointmentController = require('./controllers/appointment-controller');

/**
 * get patient details by id
 */
app.get('/api/patient/getPatientById', patientController.getPatientById);

/**
 * get patient details by attributes
 */
app.get('/api/patient/getPatientByAttributes', patientController.getPatientByAttributes);

/**
 * save patient details
 */
app.post('/api/patient/savePatient', patientController.savePatient);

/**
 * create a new patient appointment if patient exists
 */
app.post('/api/appointment/createAppointment', appointmentController.createAppointment);

app.listen(8001);
module.exports = app; 