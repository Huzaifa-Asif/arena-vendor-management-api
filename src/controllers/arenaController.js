const arenaService = require('../services/arenaService');
const arenaValidator = require('../validators/arenaValidator');

exports.createArena = async (req, res, next) => {
  try {
    const { error } = arenaValidator.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const arena = await arenaService.createArena(req.body);
    res.status(201).json(arena);
  } catch (err) {
    next(err);
  }
};

exports.getVendorsByArena = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const arenaId = req.params.id;

    const data = await arenaService.getVendorsByArena(arenaId, page, limit);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
