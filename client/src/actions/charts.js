import { GET_POPULATION, GET_COUNTIES } from './types';
import axios from 'axios';

export const getPopulation = (county, sex, year) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ county, sex, year });
  try {
    const res = await axios.post('/api/population', body, config);
    dispatch({
      type: GET_POPULATION,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCounties = () => async dispatch => {
  try {
    const res = await axios.get('/api/county');
    dispatch({
      type: GET_COUNTIES,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
