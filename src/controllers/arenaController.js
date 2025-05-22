const arenaService = require('../services/arenaService');
const arenaValidator = require('../validators/arenaValidator');
const response = require('../utils/response');

exports.createArena = async (req, res, next) => {
  try {
    const { error } = arenaValidator.validate(req.body);
    if (error) return response.error(res, error.details[0].message, 400);

    const arena = await arenaService.createArena(req.body);
    return response.success(res, 'Arena created successfully', arena, 201);
  } catch (err) {
    next(err);
  }
};

exports.getVendorsByArena = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const arenaId = req.params.id;

    const vendors = await arenaService.getVendorsByArena(arenaId, page, limit);
    return response.success(res, 'Vendors fetched successfully', vendors);
  } catch (err) {
    next(err);
  }
};
