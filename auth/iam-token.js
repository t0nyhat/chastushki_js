const superAgent = require('superagent');
const jwt = require('./jwt');

async function fetchIAMToken() {
  return superAgent.post('https://iam.api.cloud.yandex.net/iam/v1/tokens')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify({ jwt: await jwt() }))
    .then((response) => Promise.resolve(response.body))
    .catch((err) => {
      console.log(err);
    });
}

const getTimeDifferenceInMinutes = (time1, time2) => ((time1 - time2) / 1000 / 60);

const createTokenFetcher = () => {
  let TTL;
  let token;
  return async () => {
    if (!TTL || !token || getTimeDifferenceInMinutes(Date.now(), TTL) > 5) {
      const { expiresAt, iamToken } = await fetchIAMToken();
      TTL = expiresAt;
      token = iamToken;
    }
    return token;
  };
};

const fetchIamToken = createTokenFetcher();

module.exports = { getTimeDifferenceInMinutes, fetchIamToken };
