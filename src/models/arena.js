const mongoose = require('mongoose');
const PickupSlotSchema = require('./pickupSlot');

const ArenaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  pickupSlots: [PickupSlotSchema]
});

module.exports = mongoose.model('Arena', ArenaSchema);
