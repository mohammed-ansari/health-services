const query = require('./../dao/query');
const transaction = require('./../dao/transaction');


module.exports.createAppointment = function (req, res) {
  var inputData = req.body;
  /* check if patient exists */
  query.getPatientDetailsById(inputData.patient_id).then((data) => {
    if (data.Item) {
      /* create appointment */
      inputData.created_from = req.connection.remoteAddress;
      transaction.createNewAppointment(inputData).then((data) => {
        res.status(200).send({ message: data });
      }).catch((error) => {
        res.status(500).send({ message: error });
      });
    } else {
      res.status(200).send({ message: "patient does not exists" });
    }
  }).catch((error) => {
    res.status(500).send({ message: error });
  });
}
