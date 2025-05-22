const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Accept mock role via query param or header
  const role = req.headers['x-mock-role'] || req.query.role || 'admin';

  const mockUser = {
    id: '64f9d3e9c1234567890abcde', // Mock User ObjectId
    role
  };

  const token = jwt.sign(mockUser, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Inject Authorization header (as if from client)
  req.headers.authorization = `Bearer ${token}`;

  next();
};
