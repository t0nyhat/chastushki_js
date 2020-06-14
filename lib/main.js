const {FOLDER_ID} = require('../auth/consts');
const superagent = require('superagent');
const {fetchIamToken} = require('../auth/iam-token');
const fs = require('fs');

async function textToSpeech(text) {
    console.log('from tts');
    
    const result = await superagent
        .post('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize')
        .query({text, voice: 'alena', format: 'lpcm', sampleRateHertz: 48000})
        .set('Authorization', `Bearer ${await fetchIamToken()}`)
        .then(result=>{

return result;
        })

        
    return result.body;
}

module.exports = textToSpeech;
