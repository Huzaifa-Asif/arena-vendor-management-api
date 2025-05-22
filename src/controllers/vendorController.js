const vendorService = require('../services/vendorService');
const { vendorSchema, menuItemSchema } = require('../validators/vendorValidator');

exports.createVendor = async (req, res, next) => {
  try {
    const { error } = vendorSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const vendor = await vendorService.createVendor(req.body);
    res.status(201).json(vendor);
  } catch (err) {
    next(err);
  }
};

exports.addMenuItem = async (req, res, next) => {
  try {
    const { error } = menuItemSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    if (req.user.id !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const vendor = await vendorService.addMenuItem(req.params.id, req.body);
    res.json(vendor);
  } catch (err) {
    next(err);
  }
};
