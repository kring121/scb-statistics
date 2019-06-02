const express = require('express');
const router = express.Router();
const County = require('../../models/County');

// @ route  GET api/county
// @ desc   Get counties and ids
// @ access Public

router.get('/', async (req, res) => {
  try {
    const counties = await County.find().sort({ name: 1 });
    res.json(counties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
