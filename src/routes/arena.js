const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const rbac = require('../middleware/rbac');
const { createArena, getVendorsByArena } = require('../controllers/arenaController');

router.post('/', auth, rbac(['admin']), createArena);
router.get('/:id/vendors', auth, getVendorsByArena);

module.exports = router;
