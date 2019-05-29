import React, { useEffect } from 'react';
import axios from 'axios';

const Chart = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'http://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101A/BefolkningNy'
      );
      console.log(res.data);
    };
    fetchData();
  });
  return <div />;
};

export default Chart;
