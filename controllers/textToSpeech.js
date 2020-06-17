const superagent = require('superagent');
const { Readable } = require('stream');
const { addWavHeader } = require('../lib/addWavHeader');
const { START_PCM, END_PCM, MIDDLE_PCM } = require('../auth/consts');
const { fetchIamToken } = require('../auth/iam-token');

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
        const RESULT_PCM_DV = new DataView(result.body.buffer);
        const out_buf = new Int16Array(result.body.length / 2);
        try {
          let count = 0;
          for (let i = 0; i < result.body.length; i += 2) {
            if (count > (MIDDLE_PCM.length - 1)) {
              count = 0;
            }
            if (i < (result.body.length / 3) * 2) {
              out_buf[i / 2] = RESULT_PCM_DV.getInt16(i, true) + MIDDLE_PCM[count];
            } else {
              out_buf[i / 2] = RESULT_PCM_DV.getInt16(i, true);
            }
            count += 1;
          }

          const ss = new Int16Array(START_PCM.length + out_buf.length + END_PCM.length);
          ss.set(START_PCM);
          ss.set(out_buf, START_PCM.length);
          ss.set(END_PCM, START_PCM.length + out_buf.length);


          const str = addWavHeader(ss, 48000, 16, 1);

          res.send(Buffer.from(str));
        } catch (err) {
          next();
        }
      })
      .catch(next);
  }).catch(next);
}

module.exports = { textToSpeech };
