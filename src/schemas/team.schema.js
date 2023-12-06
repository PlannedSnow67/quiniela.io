const Joi = require('joi');

const teamSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string(),
    countryId: Joi.number().integer().required(),
    stadiumId: Joi.number().integer().required(),
});


const getTeamByIdSchema = Joi.object({
    id: Joi.number().integer().required(),
});

module.exports = { teamSchema, getTeamByIdSchema };