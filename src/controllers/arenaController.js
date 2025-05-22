const Arena = require('../models/arena');
const Assignment = require('../models/assignment');
const Vendor = require('../models/vendor');

exports.createArena = async (req, res) => {
  try {
    const arena = await Arena.create(req.body);
    res.json(arena);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVendorsByArena = async (req, res) => {
  try {
    const arenaId = req.params.id;
    const assignments = await Assignment.find({ arenaId }).populate('vendorId');
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
