import { GET_POPULATION, FILTER_POPULATION } from '../actions/types';

const initialState = {
  population: [],
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
    default:
      return state;
  }
}
