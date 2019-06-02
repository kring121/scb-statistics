const mongoose = require('mongoose');

const PopulationSchema = new mongoose.Schema({
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

module.exports = Population = mongoose.model('population', PopulationSchema);
