const express = require('express');
const router = express.Router();
const Population = require('../../models/Population');
const County = require('../../models/County');

// @ route  POST api/population
// @ desc   Get filtered population from query selection
// @ access Public

router.post('/', async (req, res) => {
  const { county, sex, year } = req.body;
  try {
    const population = await Population.find({
      county: { $in: county },
      sex: { $in: sex },
      year: { $in: year }
    }).populate('county', 'name');
    res.json(population);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
