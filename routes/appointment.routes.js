const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointments.controller');

router.post('/appointments', function(req, res) {
    appointmentsController.postAppointment(req, res);
});

router.get('/appointments/:id', function(req, res) {
    appointmentsController.getAppointmentById(req, res);
});

router.patch('/appointments/:id', function(req, res) {
    appointmentsController.patchAppointment(req, res);
});

router.delete('/appointments/:id', function(req, res) {
    appointmentsController.deleteAppointment(req, res);
});

module.exports = router;