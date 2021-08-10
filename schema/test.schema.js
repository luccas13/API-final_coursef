const Joi = require('joi');

const testSchemaPost = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
});

function validationTest (data) {
    return Joi.assert(data, testSchemaPost);
}

module.exports = validationTest;