import { GET_POPULATION, GET_COUNTIES } from '../actions/types';

const initialState = {
  population: [],
  countyList: [],
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
        population: payload
      };
    case GET_COUNTIES:
      return {
        ...state,
        countyList: payload
      };
    default:
      return state;
  }
}
