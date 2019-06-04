const express = require('express');
const router = express.Router();
const Birth = require('../../models/Birth');

// @ route  POST api/birth
// @ desc   Get filtered births from query selection
// @ access Public

router.post('/', async (req, res) => {
  const { county, sex, year } = req.body;
  try {
    const births = await Birth.find({
      county: { $in: county },
      sex: { $in: sex },
      year: { $in: year }
    }).populate('county', 'name').sort({year: 1});
    res.json(births);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
