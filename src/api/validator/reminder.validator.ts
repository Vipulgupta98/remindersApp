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

const reminder = Joi.object({
  userId: Joi.string().uuid().required(),
  reminderName: Joi.string().required(),
  description: Joi.string().required(),
  reminderDate: Joi.date().required(),
  status: Joi.string().required().valid('completed','open')
})
const updateReminder = Joi.object({
  userId: Joi.string().uuid().required(),
  reminderId: Joi.string().required(),
  reminderName: Joi.string().optional(),
  description: Joi.string().optional(),
  reminderDate: Joi.date().optional(),
  status: Joi.string().optional().valid('completed','open')
})

export {
  userRegisterValidator,
  loginDetails,
  updatePassword,
  reminder,
  updateReminder
};

