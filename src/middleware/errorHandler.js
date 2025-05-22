const { error } = require('../utils/response');

module.exports = (err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return error(res, message, statusCode);
};
