const mongoose = require('mongoose');
const MenuItemSchema = require('./menuItem');
const { ACTIVE } = require('../constants/statuses');

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ['active', 'inactive'], default: ACTIVE },
  menu: [MenuItemSchema],
});

module.exports = mongoose.model('Vendor', VendorSchema);
