const mongoose = require('mongoose');

const CountySchema = new mongoose.Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = County = mongoose.model('county', CountySchema);
