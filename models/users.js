// user
const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const bcrypt = require('bcryptjs');
const UnauthorisedError = require('../errors/unauthorised-err');

const emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Невалидный Email',
  }),
];
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: emailValidator,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorisedError('Пользователь не найден'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorisedError('Неправильные почта или пароль'));
          }

          return user;
        });
    });
};
userSchema.methods.omitPrivate = function omitPrivate() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};
module.exports = mongoose.model('user', userSchema);
