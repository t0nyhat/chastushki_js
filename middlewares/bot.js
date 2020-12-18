const TelegramBot = require('node-telegram-bot-api');
const { TLG_TOKEN, TLG_USER_ID } = require('../consts/consts');

const token = TLG_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const sendMesssage = (req, res, next) => {
  const { text } = req.body;
  if (text) {
    bot.sendMessage(TLG_USER_ID, text);
  }
  next();
};

module.exports = { sendMesssage };
