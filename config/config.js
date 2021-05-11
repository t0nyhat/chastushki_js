require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  PORT: 3000,
  JWT_SECRET: isProduction ? process.env.JWT_SECRET : 'dev-secret',
  DATABASE_URL: isProduction ? process.env.DATABASE_URL : 'mongodb://localhost:27017/newsdbDev',
};
