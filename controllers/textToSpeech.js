const superagent = require('superagent');
const { API_KEY } = require('../consts/consts');
const { createDitty } = require('../lib/createDitty');

function textToSpeech(req, res, next) {
  let {
    text,
  } = req.body;
  const {
    speed, voice, emotion, lang,
  } = req.body;
  if (text.length > 200) {
    text = 'Очень много букв ';
  }

  superagent
    .post('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize')
    .query({
      text,
      voice,
      format: 'lpcm',
      sampleRateHertz: 48000,
      emotion,
      speed,
      lang,
    })
    .set('Authorization', `Api-Key ${API_KEY}`)
    .then((result) => {
      if (result.ok) {
        const getWavDitty = createDitty(result.body);
        res.append('Content-Type', 'audio/x-wav');
        res.send(getWavDitty);
      }
    })
    .catch(next);
}

module.exports = { textToSpeech };
