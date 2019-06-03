import {
  GET_POPULATION,
  GET_COUNTIES,
  GET_BIRTHS,
  SET_CATEGORY
} from '../actions/types';

const initialState = {
  population: [],
  countyList: [],
  births: [],
  category: 'population',
  county: ['00'],
  sex: ['1', '2'],
  year: ['2013', '2014', '2015', '2016', '2017']
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULATION:
      return {
        ...state,
        population: payload.population,
        county: payload.county,
        sex: payload.sex,
        year: payload.year
      };
    case GET_COUNTIES:
      return {
        ...state,
        countyList: payload
      };
    case GET_BIRTHS:
      return {
        ...state,
        births: payload.births,
        county: payload.county,
        sex: payload.sex,
        year: payload.year
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: payload
      };
    default:
      return state;
  }
}
