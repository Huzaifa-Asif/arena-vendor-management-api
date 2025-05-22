const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
});

module.exports = MenuItemSchema; // Used as subdocument
