const { START_PCM, END_PCM, MIDDLE_PCM } = require('../auth/consts');
const { addWavHeader } = require('./addWavHeader');

const createDitty = (rawPcm) => {
  const RESULT_PCM_DV = new DataView(rawPcm.buffer);
  const outBuf = new Int16Array(rawPcm.length / 2);
  let count = 0;
  for (let i = 0; i < rawPcm.length; i += 2) {
    if (count > (MIDDLE_PCM.length - 1)) {
      count = 0;
    }
    if (i < (rawPcm.length / 3) * 2) {
      outBuf[i / 2] = RESULT_PCM_DV.getInt16(i, true) + MIDDLE_PCM[count];
    } else {
      outBuf[i / 2] = RESULT_PCM_DV.getInt16(i, true);
    }
    count += 1;
  }

  const fullRawPcmDitty = new Int16Array(START_PCM.length + outBuf.length + END_PCM.length);
  fullRawPcmDitty.set(START_PCM);
  fullRawPcmDitty.set(outBuf, START_PCM.length);
  fullRawPcmDitty.set(END_PCM, START_PCM.length + outBuf.length);

  const fullWavDitty = addWavHeader(fullRawPcmDitty, 48000, 16, 1);
  return Buffer.from(fullWavDitty);
};
module.exports = { createDitty };
