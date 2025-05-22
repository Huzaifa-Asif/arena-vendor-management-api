const express = require('express');
const router = express.Router();
const mockToken = require('../middleware/mockTokenInjector'); 
const auth = require('../middleware/auth');
const rbac = require('../middleware/rbac');
const { assignVendor } = require('../controllers/assignController');

router.post('/', mockToken, auth, rbac(['admin']), assignVendor);

module.exports = router;
