const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const rbac = require('../middleware/rbac');
const { assignVendor } = require('../controllers/assignController');

router.post('/', auth, rbac(['admin']), assignVendor);

module.exports = router;
