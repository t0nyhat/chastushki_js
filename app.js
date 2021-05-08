const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./middlewares/errorHandler');
// const { sendMesssage } = require('./middlewares/bot');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});

const app = express();
// const corsOptions = {
//   origin: [
//       'http://localhost:8080',
//       'http://newsapp.ga/'
//   ],
//   credentials: true,
// };
app.use(cors());

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
app.use(express.static('public'));
app.use('/', require('./routes/tts.js'));

app.use(errorLogger);
app.use('*', error);
app.use(errorHandler);

module.exports = app;
