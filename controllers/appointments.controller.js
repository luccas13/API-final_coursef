const appointmentServices = require('../services/db/appointment.services');
const validationAppointment = require('../schema/appointment.schema');

async function getAppointmentById (req, res) {
    const id = req.params.id
    res.json(await appointmentServices.findAppointmentsById(id));
}

async function postAppointment (req, res) {
    const data = req.body
    try{
        validationAppointment(data);
    } catch(err){
        return res.send({message: 'ERROR'});
    };
    res.json(await appointmentServices.postAppointments(req.body));
}

async function patchAppointment (req, res) {
    const id = req.params.id
    const data = req.body
    try{
        validationAppointment(data);
    } catch(err){
        return res.send({message: 'ERROR'});
    };
    res.json(await appointmentServices.patchAppointments(data, id));
}

async function deleteAppointment (req, res) {
    const id = req.params.id
    res.json(await appointmentServices.deleteAppointments(id));
}

module.exports = { getAppointmentById, postAppointment, patchAppointment, deleteAppointment };