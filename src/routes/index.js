
const express = require('express');
const router = express.Router();

const arenaRoutes = require('./arena');
const vendorRoutes = require('./vendor');
const assignRoutes = require('./assign');

router.use('/arena', arenaRoutes);
router.use('/vendor', vendorRoutes);
router.use('/assign', assignRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Arena Vendor Management API' });
});

module.exports = router;
