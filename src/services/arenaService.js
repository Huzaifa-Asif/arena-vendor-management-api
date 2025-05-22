const Arena = require('../models/arena');
const Assignment = require('../models/assignment');
const Vendor = require('../models/vendor');

const createArena = async (data) => {
  return await Arena.create(data);
};

const getVendorsByArena = async (arenaId, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const assignments = await Assignment.find({ arenaId })
    .populate('vendorId')
    .skip(skip)
    .limit(limit);
  return assignments;
};

module.exports = {
  createArena,
  getVendorsByArena
};
