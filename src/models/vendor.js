const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  category: String,
  title: String,
  price: Number,
  isAvailable: Boolean,
});

const VendorSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  menu: [MenuItemSchema],
});

module.exports = mongoose.model('Vendor', VendorSchema);
