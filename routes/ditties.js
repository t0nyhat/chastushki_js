const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const { create } = require('../controllers/ditty');

router.post('/create', celebrate({
  body: Joi.object().keys({
    text: Joi.string().required().min(1).max(200),
    voice: Joi.string().required().min(4).max(10),
    lang: Joi.string().required().min(5).max(5),
    emotion: Joi.string().required().min(4).max(10),
    speed: Joi.number(),
  }),
}), create);

module.exports = router;
