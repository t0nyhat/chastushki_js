require('dotenv').config();

const { FOLDER_ID } = process.env;
const { KEY_ID } = process.env;
const { ISS } = process.env;

module.exports = {
  FOLDER_ID,
  KEY_ID,
  ISS,
};
