const Joi = require('joi');

const vendorSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  status: Joi.string().valid('active', 'inactive').optional()
});

const menuItemSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().required(),
  isAvailable: Joi.boolean().required()
});

module.exports = {
  vendorSchema,
  menuItemSchema
};
