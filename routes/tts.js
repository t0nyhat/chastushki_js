const router = require('express').Router();

const { textToSpeech } = require('../controllers/textToSpeech');

router.post('/api/speech', textToSpeech);

module.exports = router;
