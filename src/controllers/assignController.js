const Assignment = require('../models/assignment');
const vendorService = require('../services/vendorService');

exports.assignVendor = async (req, res, next) => {
  try {
    const { arenaId, vendorId, pickupSlotId } = req.body;

    const vendor = await vendorService.getVendorIfActive(vendorId);
    if (!vendor) return res.status(400).json({ error: 'Vendor must be active' });

    const exists = await Assignment.findOne({ arenaId, vendorId, pickupSlotId });
    if (exists) return res.status(409).json({ error: 'Duplicate assignment' });

    const assignment = await Assignment.create({ arenaId, vendorId, pickupSlotId });
    res.status(201).json(assignment);
  } catch (err) {
    next(err);
  }
};
