const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  arenaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Arena', required: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  pickupSlotId: { type: String, required: true }
});

// Compound index to prevent duplicate assignments
AssignmentSchema.index({ arenaId: 1, vendorId: 1, pickupSlotId: 1 }, { unique: true });

module.exports = mongoose.model('Assignment', AssignmentSchema);
