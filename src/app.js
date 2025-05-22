require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const indexRouter = require('./routes/index');

const app = express();
connectDB();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(xss());
app.use(mongoSanitize());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// Swagger Docs
const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/', indexRouter);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
