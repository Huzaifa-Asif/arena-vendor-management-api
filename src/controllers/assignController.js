const Assignment = require('../models/assignment');
const Vendor = require('../models/vendor');

exports.assignVendor = async (req, res) => {
  const { arenaId, vendorId, pickupSlotId } = req.body;

  const vendor = await Vendor.findById(vendorId);
  if (!vendor || vendor.status !== 'active') {
    return res.status(400).json({ error: 'Vendor must be active' });
  }

  const existing = await Assignment.findOne({ arenaId, vendorId, pickupSlotId });
  if (existing) {
    return res.status(409).json({ error: 'Vendor already assigned to this slot' });
  }

  const assignment = await Assignment.create({ arenaId, vendorId, pickupSlotId });
  res.json(assignment);
};
