const express = require('express');
const router = express.Router();
const { createArena, getVendorsByArena } = require('../controllers/arenaController');
const auth = require('../../middleware/auth');

router.post('/', auth('admin'), createArena);
router.get('/:id/vendors', auth(), getVendorsByArena);

module.exports = router;
