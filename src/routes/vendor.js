const express = require('express');
const router = express.Router();
const mockToken = require('../middleware/mockTokenInjector'); 
const auth = require('../middleware/auth');
const rbac = require('../middleware/rbac');
const { createVendor, addMenuItem } = require('../controllers/vendorController');

router.post('/', mockToken, auth, rbac(['admin']), createVendor);
router.post('/:id/menu', mockToken, auth, rbac(['vendor', 'admin']), addMenuItem);

module.exports = router;
