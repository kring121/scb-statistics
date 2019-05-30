import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getPopulation } from '../../actions/charts';

const Chart = ({ getPopulation, sex, years, regions }) => {
  useEffect(() => {
    getPopulation(sex, years, regions);
  }, [getPopulation]);

  return <h1>Chart</h1>;
};

const mapStateToProps = state => ({
  population: state.charts.population,
  sex: state.charts.selection.sex,
  years: state.charts.selection.years,
  regions: state.charts.selection.regions
});

export default connect(
  mapStateToProps,
  { getPopulation }
)(Chart);
