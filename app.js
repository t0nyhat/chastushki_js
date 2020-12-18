const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./middlewares/errorHandler');
const { sendMesssage } = require('./middlewares/bot');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});
const { PORT = 3001 } = process.env;

const app = express();
app.use(helmet());

app.use(limiter);

const error = (req, res, next) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(sendMesssage);

app.use(cookieParser());
app.use(express.static('public'));
app.use('/', require('./routes/tts.js'));

app.use(errorLogger);
app.use('*', error);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`App in localhost:${PORT}`);
});
