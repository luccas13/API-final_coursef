const Appointment = require('../../models/appointment.model');

async function findAppointmentsById(id) {
    const appointment = await Appointment.find({_id: id})
                            .catch(err => ({message: 'appointment not exist.'}));
    return appointment;
}

async function postAppointments(data) {
    const {name, surname, dni, date, point} = data;
    const appointment = new Appointment({
        name, surname, dni, date, point
    });
    await appointment.save((err) => {
        if (err) return console.log(err);
        console.log(`appointment ${appointment} added to the DB`);
    });
    return {status: 'ok'};
}

async function patchAppointments(data, id) {
    console.log(data);
    await Appointment.updateOne({_id: id}, data)
            .catch(err => ({message: 'Update Error.'}));
    return {message: 'Update success!'};
}

async function deleteAppointments(id) {
    const res = await Appointment.remove({_id: id})
        .then(res => { return {message: 'Appointment deleted success.'} })
        .catch(err => { return {message: 'Error: appointment not exist.'} });
    return res;
}

module.exports = { findAppointmentsById, postAppointments, patchAppointments, deleteAppointments };