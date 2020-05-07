const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apps', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if (err) return console.log(err)
  console.log("Database was connected successfully")
})

module.exports = mongoose
