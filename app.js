const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const { DATABASE_URL } = require('./config/config');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./middlewares/errorHandler');
// const { sendMesssage } = require('./middlewares/bot');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});
const app = express();

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(cors());
app.options('*', cors());

app.use(helmet());

app.use(limiter);

const error = (req, res, next) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
// app.use(sendMesssage);
app.use(cookieParser());

// app.use(express.static('public'));
app.use('/ditties', require('./routes/ditties.js'));

app.use(errorLogger);
app.use('*', error);
app.use(errors());
app.use(errorHandler);

module.exports = app;
