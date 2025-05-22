const Joi = require('joi');

const pickupSlotSchema = Joi.object({
  name: Joi.string().required(),
  capacity: Joi.number().required()
});

const arenaSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().required(),
  pickupSlots: Joi.array().items(pickupSlotSchema).min(1).required()
});

module.exports = arenaSchema;
