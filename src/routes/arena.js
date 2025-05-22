const express = require('express');
const router = express.Router();
const mockToken = require('../middleware/mockTokenInjector'); 
const auth = require('../middleware/auth');
const rbac = require('../middleware/rbac');
const { createArena, getVendorsByArena } = require('../controllers/arenaController');

router.post('/', mockToken, auth, rbac(['admin']), createArena);
router.get('/:id/vendors', mockToken, auth, getVendorsByArena);

module.exports = router;
