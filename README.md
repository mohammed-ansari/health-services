# patient-services
This project contains patient appointment scheduling services

# To setup node js, please refer below url:
https://nodejs.org/en/

# To know about DynamoDB, please refer the below url:
https://aws.amazon.com/dynamodb
Add your aws access key id and secret key id in config file to access your dynamoDB

# To setup and run project, execute the below commands sequentially in your project directory:
1. npm install
2. npm start

# Description of services created are as follows:
base_url --> http://localhost:8001/

1. service url: api/patient/savePatient
   http verb: POST
   description: save a patient
   request-json: save-patient.json
   
2. service url: api/appointment/createAppointment
   http-verb: POST
   description: create a new appointment for patient if patient exists
   request-json: create-appointment.json
   
3. service url: api/patient/getPatientById/?patient_id="patient_id"
   http-verb: GET
   description: get patient by id
   
4. service url: api/patient/getPatientByAttributes/?first_name="first_name"&last_name="last_name"&dob="dob"&mrn="mrn"
   http-verb: GET
   description: get patient by first name, last name, dob and mrn(medical record number)
