const mongoose = require('mongoose');

const PickupSlotSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
});

const ArenaSchema = new mongoose.Schema({
  name: String,
  date: Date,
  pickupSlots: [PickupSlotSchema],
});

module.exports = mongoose.model('Arena', ArenaSchema);
