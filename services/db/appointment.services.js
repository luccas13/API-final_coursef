// const mongoose = require("mongoose");
const Appointment = require('../../models/appointment.model');

async function findAppointmentsById(id) {
    const appointment = await Appointment.aggregate([
    {$match: { dni: id }},
    {$lookup: {
        from: 'points',
        localField: 'point',
        foreignField: '_id',
        as: 'point',
    }},
    {$unwind: '$point'}
    ]).catch(err => ({message: err}));    

    if (appointment.length !== 0) return appointment[0]
    else return {message: 'appointment not exist.'};
}

async function postAppointments(data) {
    const {name, surname, dni, date, point} = data;
    let appointments = await Appointment.find().catch(err => ({message: err}));
    appointments = appointments.filter(item => item.dni === dni);
    if (appointments.length === 0){
        const appointment = new Appointment({
            name, surname, dni, date, point
        });
        await appointment.save((err) => {
            if (err) return {message: err};
        });
        return {status: 'ok', appointment};
    } else return {message: 'There is already an appointment with this DNI.'}
}

async function patchAppointments(data, id) {
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