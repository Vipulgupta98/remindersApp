import Joi from "@hapi/joi";

const userRegisterValidator = Joi.object({
  email: Joi.string().email().optional().messages({
    'string.base': 'email must be a string',
    'string.email': 'Email is invalid',
    'any.required': 'email is required',
  }),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().optional(),
  dob: Joi.string().required()
});

const loginDetails = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'email must be a string',
    'string.email': 'Email is invalid',
    'any.required': 'email is required',
  }),
  password: Joi.string().required(),
});

const updatePassword = Joi.object({
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
});

export {
  userRegisterValidator,
  loginDetails,
  updatePassword
};
