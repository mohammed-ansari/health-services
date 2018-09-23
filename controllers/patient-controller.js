const query = require('./../dao/query');
const transaction = require('./../dao/transaction');


module.exports.getPatientById = function (req, res) {
  if (req.query.patient_id) {
    var data = req.query.patient_id;
    query.getPatientDetailsById(data).then((data) => {
      res.status(200).send({ message: data });
    }).catch((error) => {
      res.status(200).send({ message: error });
    });
  } else {
    res.status(200).send({ message: "request data not provided" });
  }


}

module.exports.getPatientByAttributes = function (req, res) {
  if (req.query.first_name && req.query.last_name && req.query.dob && req.query.mrn) {
    var data = req.query;
    query.getPatientDetailsByAttributes(data).then((data) => {
      res.status(200).send({ message: data });
    }).catch((error) => {
      res.status(200).send({ message: error });
    });
  } else {
    res.status(200).send({ message: "request data not provided" });
  }


}


module.exports.savePatient = function (req, res) {
  var data = req.body;
  data.created_from = req.connection.remoteAddress;
  transaction.savePatientDetails(data).then(function (data) {
    res.status(200).send({ message: data });
  }).catch(function (error) {
    res.status(500).send({ message: error });
  });

}

