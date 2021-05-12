const superagent = require('superagent');
const Ditty = require('../models/ditty');
const { API_KEY } = require('../consts/consts');
const { createDitty } = require('../lib/createDitty');

const create = (req, res, next) => {
  const {
    text, lang, voice, speed, emotion,
  } = req.body;
  const owner = '5ef6819bbe6276366c38690b';

  Ditty.create({
    text, lang, voice, speed, emotion, owner,
  })
    .then(() => {
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
        });
    })
    .catch(next);
};

module.exports = {
  create,
};
