const axios = require('axios');
const url = 'http://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101H/FoddaK';

const query = JSON.stringify({
  query: [
    {
      code: 'Kon',
      selection: {
        filter: 'all',
        values: ['*']
      }
    },
    {
      code: 'Tid',
      selection: {
        filter: 'item',
        values: ['2013', '2014', '2015', '2016', '2017']
      }
    },
    {
      code: 'Region',
      selection: {
        filter: 'all',
        values: ['*']
      }
    }
  ],
  response: { format: 'json' }
});

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

module.exports = async function fetchBirthData() {
  try {
    const res = await axios.post(url, query, config);
    // remove the annoying space that is returned in JSON and parse it
    const data = JSON.parse(res.data.slice(1));
    return data.data.map(datum => ({
      county: datum.key[0],
      sex: datum.key[1],
      year: datum.key[2],
      value: datum.values[0]
    }));
  } catch (err) {
    console.log(err);
  }
};
