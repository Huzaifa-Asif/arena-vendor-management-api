const Vendor = require('../models/vendor');
const { ACTIVE } = require('../constants/statuses');

const createVendor = async (data) => {
  return await Vendor.create(data);
};

const addMenuItem = async (vendorId, menuItem) => {
  const vendor = await Vendor.findById(vendorId);
  if (!vendor) throw new Error('Vendor not found');

  vendor.menu.push(menuItem);
  await vendor.save();
  return vendor;
};

const getVendorIfActive = async (vendorId) => {
  const vendor = await Vendor.findOne({ _id: vendorId, status: ACTIVE });
  return vendor;
};

module.exports = {
  createVendor,
  addMenuItem,
  getVendorIfActive
};
