import {
  GET_POPULATION,
  GET_COUNTIES,
  GET_BIRTHS,
  SET_CATEGORY,
  SET_FILTERTYPE
} from '../actions/types';

const initialState = {
  population: [],
  countyList: [],
  births: [],
  county: ['00', '01'],
  sex: ['1'],
  year: ['2013']
  category: 'population',
  filterType: 'years'
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
    case SET_FILTERTYPE:
      return {
        ...state,
        filterType: payload
      };
    default:
      return state;
  }
}
