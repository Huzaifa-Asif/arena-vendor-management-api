const express = require('express');
const router = express.Router();
const { createVendor, addMenuItem } = require('../controllers/vendorController');
const auth = require('../../middleware/auth');

router.post('/', auth('admin'), createVendor);
router.post('/:id/menu', auth('vendor'), addMenuItem);

module.exports = router;
