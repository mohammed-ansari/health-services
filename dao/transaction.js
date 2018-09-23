
var AWS = require("aws-sdk");
const uuidv1 = require('uuid/v1');
var dynamoDBClient = new AWS.DynamoDB.DocumentClient();

module.exports.savePatientDetails = function (data) {
  return new Promise(function (resolve, reject) {
    if (data) {
      data.patient_id = uuidv1();
      var d = new Date();
      data.created_at = d.getFullYear().toString() + "-" + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "-" + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " " + (d.getHours().toString().length == 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ":" + ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2 ? (parseInt(d.getMinutes() / 5) * 5).toString() : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) + ":" + d.getSeconds().toString();
      dynamoDBClient.put({
        TableName: "Patient_CP",
        Item: data
      }).promise().then(function (data) {
        resolve(data);
      }).catch(function (error) {
        reject(error);
      });
    } else {
      reject("no request data provided");
    }

  });
}

module.exports.createNewAppointment = function (data) {
  return new Promise(function (resolve, reject) {
    if (data) {
      data.appointment_id = uuidv1();
      var d = new Date();
      data.created_at = d.getFullYear().toString() + "-" + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "-" + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " " + (d.getHours().toString().length == 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ":" + ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2 ? (parseInt(d.getMinutes() / 5) * 5).toString() : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) + ":" + d.getSeconds().toString();
      dynamoDBClient.put({
        TableName: "Appointments_CP",
        Item: data
      }).promise().then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    } else {
      reject("no request data provided");
    }
  });
}

