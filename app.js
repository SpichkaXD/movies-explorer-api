require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes/index');
const limiter = require('./utils/rateLimiter');

const { PORT = 3300, DATABASE = 'mongodb://localhost:27017/moviesdb' } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(requestLogger);
app.use(limiter);
app.use(cors());

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

mongoose.connect(DATABASE);

app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`App listening on port ${PORT}`);
