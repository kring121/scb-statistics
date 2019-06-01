const connectDB = require('./config/db');
const Population = require('./models/Population');
const mongoose = require('mongoose');
const fetchData = require('./data/population');

(async () => {
  const data = await fetchData();
  await connectDB();
  console.log('Data received');
  await Population.insertMany(data, function(err) {
    if (err) {
      console.log(err);
      mongoose.disconnect();
    } else {
      console.log('Database seeded');
      mongoose.disconnect();
    }
  });
})();
