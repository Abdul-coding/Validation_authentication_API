const Joi = require('joi');

const schema  = Joi.object().keys({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().lowercase().required(),
    phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    password: Joi.string().min(5).required(),
    birthday: Joi.date().max('1-1-2004').iso()
});

module.exports = schema;
