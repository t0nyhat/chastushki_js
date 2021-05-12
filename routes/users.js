const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const validator = require('validator');


const {
  getUsers, getUsersById, patchUserInfo, patchUserAvatar,
} = require('../controllers/user');

const urlValidate = (link) => {
  if (!validator.isURL(link)) {
    throw new Error('invalid avatar link');
  }
  return link;
};

router.get('/', getUsers);
router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().length(24),
  }),
}), getUsersById);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), patchUserInfo);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(urlValidate),
  }),
}), patchUserAvatar);

module.exports = router;