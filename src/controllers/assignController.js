const Assignment = require('../models/assignment');
const vendorService = require('../services/vendorService');
const response = require('../utils/response');

exports.assignVendor = async (req, res, next) => {
  try {
    const { arenaId, vendorId, pickupSlotId } = req.body;

    const vendor = await vendorService.getVendorIfActive(vendorId);
    if (!vendor) return response.error(res, 'Vendor must be active', 400);

    const exists = await Assignment.findOne({ arenaId, vendorId, pickupSlotId });
    if (exists) return response.error(res, 'Pickupslot already assigned', 409);

    const assignment = await Assignment.create({ arenaId, vendorId, pickupSlotId });
    return response.success(res, 'Vendor assigned successfully', assignment, 201);
  } catch (err) {
    next(err);
  }
};
