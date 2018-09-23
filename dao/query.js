var AWS = require("aws-sdk");
var dynamoDBClient = new AWS.DynamoDB.DocumentClient();

module.exports.getPatientDetailsById = function (data) {
  return new Promise(function (resolve, reject) {
    if (data) {
      dynamoDBClient.get({
        TableName: "Patient_CP",
        Key: {
          "patient_id": data
        }
      }).promise().then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    } else {
      reject("no request data provided");
    }

  });

}


module.exports.getPatientDetailsByAttributes = function (data) {
  return new Promise(function (resolve, reject) {
    if (data) {
      dynamoDBClient.query({
        TableName: "Patient_CP",
        IndexName:"mrn-index",
        KeyConditionExpression : "mrn = :mrn",
        FilterExpression:"last_name = :last_name and dob = :dob and first_name = :first_name",
        ExpressionAttributeValues: {
          ":first_name": data.first_name,
          ":last_name": data.last_name,
          ":dob": data.dob,
          ":mrn": data.mrn
        }
      }).promise().then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    } else {
      reject("no request data provided");
    }

  });

}


