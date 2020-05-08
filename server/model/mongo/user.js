const mongoose = require('./db')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('users', userSchema);
