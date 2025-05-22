const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  arenaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Arena' },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  pickupSlotId: String,
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
