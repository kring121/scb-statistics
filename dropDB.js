const config = require('config');
const mongoose = require('mongoose');

(async () => {
  const conn = await mongoose.createConnection(config.get('mongoURI'), {
    useNewUrlParser: true
  });
  await conn.dropDatabase();
  mongoose.disconnect();
})();
