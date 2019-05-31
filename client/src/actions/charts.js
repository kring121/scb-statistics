import { GET_POPULATION } from './types';
import axios from 'axios';

const queryObj = (code, values) => ({
  code: code,
  selection: {
    filter: values !== 'all' ? 'item' : 'all',
    values: values === 'all' ? ['*'] : values
  }
});

const constructQuery = (sex, years, regions) => {
  const query = [
    queryObj('Kon', sex),
    queryObj('Tid', years),
    queryObj('Region', regions)
  ];
  return query;
};

export const getPopulation = (sex, years, regions) => async dispatch => {
  const body = {
    query: constructQuery(sex, years, regions),
    response: { format: 'json' }
  };
  try {
    const res = await axios.post(
      'http://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101A/BefolkningNy',
      JSON.stringify(body)
    );
    dispatch({
      type: GET_POPULATION,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
  }
};
