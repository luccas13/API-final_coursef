const Joi = require('joi');

const appointmentSchemaPost = Joi.object().keys({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    dni: Joi.string().required(),
    date: Joi.date().required(),
    point: Joi.string().required(),
});

function validationAppointment (data) {
    return Joi.assert(data, appointmentSchemaPost);
}

module.exports = validationAppointment;