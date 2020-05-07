const mongoose = require('./db')

const appsSchema = mongoose.Schema({
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
    required: true
  },
  user: {
    type: String,
    requred: true
  }
});

module.exports = mongoose.model('apps', appsSchema);
