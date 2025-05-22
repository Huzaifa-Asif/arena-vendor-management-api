const express = require('express');
const router = express.Router();

const arenaRoutes = require('./arena');
const vendorRoutes = require('./vendor');
const assignRoutes = require('./assign');

router.use('/api/arena', arenaRoutes);
router.use('/api/vendor', vendorRoutes);
router.use('/api/assign', assignRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Arena Vendor Management API' });
});

module.exports = router;
