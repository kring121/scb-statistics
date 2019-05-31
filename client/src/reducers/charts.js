import { GET_POPULATION, FILTER_POPULATION } from '../actions/types';

const initialState = {
  population: [],
  selection: {
    sex: 'all',
    years: ['2013', '2014', '2015', '2016', '2017'],
    regions: ['00']
  },
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULATION:
      return {
        ...state,
        population: payload,
        loading: false
      };
    default:
      return state;
  }
}
