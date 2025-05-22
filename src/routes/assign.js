const express = require('express');
const router = express.Router();
const { assignVendor } = require('../controllers/assignController');
const auth = require('../../middleware/auth');

router.post('/', auth('admin'), assignVendor);

module.exports = router;
