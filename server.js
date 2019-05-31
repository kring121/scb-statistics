const express = require('express');

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running... you better go catch it!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
