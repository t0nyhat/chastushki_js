require('dotenv').config();
const fs = require('fs');
const path = require('path');

const { FOLDER_ID } = process.env;
const { KEY_ID } = process.env;
const { ISS } = process.env;
const START_PCM_SOURCE = fs.readFileSync(path.resolve(__dirname, '../sound/start.pcm'));
const END_PCM_SOURCE = fs.readFileSync(path.resolve(__dirname, '../sound/end.pcm'));
const MIDDLE_PCM_SOURCE = fs.readFileSync(path.resolve(__dirname, '../sound/middle.pcm'));

const START_PCM_DV = new DataView(START_PCM_SOURCE.buffer);
const END_PCM_DV = new DataView(END_PCM_SOURCE.buffer);
const MIDDLE_PCM_DV = new DataView(MIDDLE_PCM_SOURCE.buffer);

const START_PCM = new Int16Array(START_PCM_SOURCE.length / 2);
const END_PCM = new Int16Array(END_PCM_SOURCE.length / 2);
const MIDDLE_PCM = new Int16Array(MIDDLE_PCM_SOURCE.length / 2);

for (let i = 0; i < START_PCM_SOURCE.length; i += 2) {
  START_PCM[i / 2] = START_PCM_DV.getInt16(i, true);
}
for (let i = 0; i < END_PCM_SOURCE.length; i += 2) {
  END_PCM[i / 2] = END_PCM_DV.getInt16(i, true);
}
for (let i = 0; i < MIDDLE_PCM_SOURCE.length; i += 2) {
  MIDDLE_PCM[i / 2] = MIDDLE_PCM_DV.getInt16(i, true);
}

module.exports = {
  FOLDER_ID,
  KEY_ID,
  ISS,
  START_PCM,
  END_PCM,
  MIDDLE_PCM,
};
