const superagent = require('superagent');
const { addWavHeader } = require('../lib/addWavHeader');
const { START_PCM, END_PCM, MIDDLE_PCM } = require('../auth/consts');
const { fetchIamToken } = require('../auth/iam-token');

function createDitty(rawPcm) {
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
}

function textToSpeech(req, res, next) {
  const { text } = req.body;

  fetchIamToken().then((token) => {
    superagent
      .post('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize')
      .query({
        text, voice: 'alyss', format: 'lpcm', sampleRateHertz: 48000,
      })
      .set('Authorization', `Bearer ${token}`)
      .then((result) => {
        if (result.ok) {
          const wavDitty = createDitty(result.body);
          res.append('Content-Type', 'audio/x-wav');
          res.send(wavDitty);
        }
      })
      .catch(next);
  }).catch(next);
}

module.exports = { textToSpeech };
