import Joi = require('joi');

const ANY_REQUIRED = 'All fields must be filled';

export default class JoiSchemas {
  user = Joi.object({
    username: Joi.string().min(8),
    role: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  login = Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': ANY_REQUIRED,
      'string.empty': ANY_REQUIRED,
    }),
    password: Joi.string().required().messages({
      'any.required': ANY_REQUIRED,
      'string.empty': ANY_REQUIRED,
    }),
  });

  matches = Joi.object({
    user: Joi.object(),
    homeTeam: Joi.number().min(1),
    awayTeam: Joi.number().min(1),
    homeTeamGoals: Joi.number().min(1),
    awayTeamGoals: Joi.number().min(1),
    inProgress: Joi.boolean(),
  });
}
