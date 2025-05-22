const express = require('express');
const router = express.Router();

const arenaRoutes = require('./arena');
const vendorRoutes = require('./vendor');
const assignRoutes = require('./assign');

router.use('/arena', arenaRoutes);
router.use('/vendor', vendorRoutes);
router.use('/assign', assignRoutes);

module.exports = router;
