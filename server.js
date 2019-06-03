const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running... you better go catch it!'));

// define routes
app.use('/api/population', require('./routes/api/population'));
app.use('/api/county', require('./routes/api/county'));
app.use('/api/birth', require('./routes/api/birth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
