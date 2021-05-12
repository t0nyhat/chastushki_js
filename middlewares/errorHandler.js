const mongoose = require('mongoose');

const errorHandler = (err, req, res, next) => {
  const { code } = err;
  let { statusCode = 500, message } = err;

  if (err instanceof mongoose.Error.ValidationError || err instanceof mongoose.Error.CastError) {
    statusCode = 400;
  }
  if (code === 11000) {
    statusCode = 409;
    message = 'Данный email уже используется';
  }

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
  next();
};
module.exports = { errorHandler };
