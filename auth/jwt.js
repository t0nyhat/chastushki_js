const jose = require('node-jose');
const fs = require('fs');
const { KEY_ID, ISS } = require('./consts');

const privateKey = fs.readFileSync(require.resolve('../keys/private.pem'));

async function createJWT() {
  const now = Math.floor((new Date().getTime()) / 1000);

  const payload = {
    iss: ISS,
    aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
    iat: now,
    exp: now + 3600,
  };

  const sign = await jose.JWK.asKey(privateKey, 'pem', { kid: KEY_ID, alg: 'PS256' });
  return jose.JWS.createSign({ format: 'compact' }, sign)
    .update(JSON.stringify(payload))
    .final();
}

module.exports = createJWT;
