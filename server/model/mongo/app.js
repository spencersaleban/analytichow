const mongoose = require('./db')

const appSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false
  },
  user: {
    type: String,
    requred: true
  }
});

module.exports = mongoose.model('apps', appSchema);
