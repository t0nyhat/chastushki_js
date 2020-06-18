const superagent = require('superagent');
const { fetchIamToken } = require('../auth/iam-token');
const { createDitty } = require('../lib/createDitty');

function textToSpeech(req, res, next) {
  let { text } = req.body;
  if (text.length > 150) {
    text = 'Очень много букв';
  }

  fetchIamToken().then((token) => {
    superagent
      .post('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize')
      .query({
        text, voice: 'alyss', format: 'lpcm', sampleRateHertz: 48000,
      })
      .set('Authorization', `Bearer ${token}`)
      .then((result) => {
        if (result.ok) {
          const getWavDitty = createDitty(result.body);
          res.append('Content-Type', 'audio/x-wav');
          res.send(getWavDitty);
        }
      })
      .catch(next);
  }).catch(next);
}

module.exports = { textToSpeech };
