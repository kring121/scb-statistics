const axios = require('axios');
const url =
  'http://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101A/BefolkningNy';

module.exports = async function fetchCountyData() {
  try {
    const res = await axios.get(url);
    const countyIdData = res.data.variables[0].values;
    const countyNameData = res.data.variables[0].valueTexts;
    return countyIdData.map((countyId, i) => ({
      id: countyId,
      name: countyNameData[i]
    }));
  } catch (err) {
    console.log(err);
  }
};
