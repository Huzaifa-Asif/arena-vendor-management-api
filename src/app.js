require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const connectDB = require('./config/db');
var indexRouter = require('./routes/index.js');

var app = express();
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
