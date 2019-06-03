const mongoose = require('mongoose');

const BirthSchema = new mongoose.Schema({
  county: {
    type: String,
    ref: 'county'
  },
  sex: {
    type: String
  },
  year: {
    type: String
  },
  value: {
    type: String
  }
});

module.exports = Birth = mongoose.model('birth', BirthSchema);
