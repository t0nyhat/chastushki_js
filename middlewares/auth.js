const jwt = require('jsonwebtoken');
require('dotenv').config();
const UnauthorisedError = require('../errors/unauthorised-err');

const auth = (req, res, next) => {
  if ((!req.cookies.jwt)) {
    throw new UnauthorisedError('Необходима авторизация');
  }

  let payload;

  try {
    payload = jwt.verify(req.cookies.jwt, process.env.SECRET_KEY || 'dev-secret');
  } catch (err) {
    throw new UnauthorisedError('Необходима авторизация');
  }

  req.user = payload;

  next();
};
module.exports = auth;
