import {
  GET_POPULATION,
  GET_COUNTIES,
  GET_BIRTHS,
  SET_CATEGORY,
  SET_FILTERTYPE
} from './types';
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
      payload: {
        population: res.data,
        county,
        sex,
        year
      }
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

export const getBirths = (county, sex, year) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ county, sex, year });
  try {
    const res = await axios.post('/api/birth', body, config);
    dispatch({
      type: GET_BIRTHS,
      payload: {
        births: res.data,
        county,
        sex,
        year
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const setCategory = category => dispatch => {
  dispatch({
    type: SET_CATEGORY,
    payload: category
  });
};

export const setFilterType = filterType => dispatch => {
  dispatch({
    type: SET_FILTERTYPE,
    payload: filterType
  });
};
