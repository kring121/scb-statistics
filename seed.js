const connectDB = require('./config/db');
const Population = require('./models/Population');
const County = require('./models/County');
const Birth = require('./models/Birth');
const mongoose = require('mongoose');
const fetchPopData = require('./data/population');
const fetchCountyData = require('./data/county');
const fetchBirthData = require('./data/birth');

(async () => {
  const popData = await fetchPopData();
  const countyData = await fetchCountyData();
  const birthData = await fetchBirthData();
  console.log('Data received');
  await connectDB();
  await Population.insertMany(popData, function(err) {
    if (err) {
      console.log(err);
      mongoose.disconnect();
    }
  });
  await County.insertMany(countyData, function(err) {
    if (err) {
      console.log(err);
      mongoose.disconnect();
    }
  });
  await Birth.insertMany(birthData, function(err) {
    if (err) {
      console.log(err);
      mongoose.disconnect();
    }
    mongoose.disconnect();
  });
  console.log('Database seeded');
})();
