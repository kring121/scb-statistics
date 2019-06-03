import React, { useEffect } from 'react';

// imported components
import ByYears from './ByYears';

// Redux
import { connect } from 'react-redux';
import { getPopulation } from '../../actions/charts';

const PopChart = ({ getPopulation, population, county, sex, year }) => {
  useEffect(() => {
    getPopulation(county, sex, year);
  }, [getPopulation]);

  return <ByYears values={population} valueName='Population' year={year} />;
};

const mapStateToProps = state => ({
  population: state.charts.population,
  county: state.charts.county,
  sex: state.charts.sex,
  year: state.charts.year
});

export default connect(
  mapStateToProps,
  { getPopulation }
)(PopChart);
