const superagent = require('superagent');
const { fetchIamToken } = require('../auth/iam-token');

function textToSpeech(req, res, next) {
  const { text } = req.body;
  fetchIamToken().then((token) => {
    superagent
      .post('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize')
      .query({
        text, voice: 'alena',
      })
      .set('Authorization', `Bearer ${token}`).then((result) => res.send(result.body))
      .catch(next);
  }).catch(next);
}

module.exports = { textToSpeech };
