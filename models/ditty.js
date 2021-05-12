const mongoose = require('mongoose');

const dittySchema = new mongoose.Schema({
  text: {
    type: String,
    minlength: 1,
    maxlength: 200,
    required: true,
  },
  lang: {
    type: String,
    length: 5,
    required: true,
  },
  voice: {
    type: String,
    minlength: 4,
    maxlength: 10,
    required: true,
  },
  emotion: {
    type: String,
    minlength: 4,
    maxlength: 10,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
    ],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ditty', dittySchema);
