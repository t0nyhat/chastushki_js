const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
require('dotenv').config();

const getUsers = (req, res, next) => {
  User.find({})
    .orFail(new NotFoundError('Список пользователей пуст')).then((users) => {
      res.send({ users });
    }).catch(next);
};
const getUsersById = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(new NotFoundError(`Пользователя с id : ${req.params.userId} не существует!`))
    .then((user) => {
      if (!user) {
        throw new NotFoundError(`Пользователя с id : ${req.params.userId} не существует!`);
      }
      res.send({ user });
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => res.status(201).send({ user: user.omitPrivate() }))
    .catch(next);
};
const patchUserInfo = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .orFail(new NotFoundError(`Пользователя с id : ${req.params.userId} не существует!`))
    .then((user) => {
      if (!user) {
        throw new NotFoundError(`Пользователя с id : ${req.params.userId} не существует!`);
      }
      res.send({ user });
    })
    .catch(next);
};
const patchUserAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .orFail(new NotFoundError(`Пользователя с id : ${req.params.userId} не существует!`))
    .then((user) => {
      if (!user) {
        throw new NotFoundError(`Пользователя с id : ${req.params.userId} не существует!`);
      }
      res.send({ user });
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY || 'dev-secret', {
        expiresIn: '7d',
      });
      res
        .cookie('jwt', token, {
          maxAge: 360000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        })
        .end();
    })

    .catch(next);
};

module.exports = {
  getUsers, getUsersById, createUser, patchUserInfo, patchUserAvatar, login,
};
