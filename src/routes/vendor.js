const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const rbac = require('../middleware/rbac');
const { createVendor, addMenuItem } = require('../controllers/vendorController');

router.post('/', auth, rbac(['admin']), createVendor);
router.post('/:id/menu', auth, rbac(['vendor', 'admin']), addMenuItem);

module.exports = router;
