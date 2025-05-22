const mongoose = require('mongoose');

const PickupSlotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
});

module.exports = PickupSlotSchema; // Used as subdocument