import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getBirths } from '../../actions/charts';
import ByYears from './ByYears';

const BirthChart = ({ getBirths, births, county, sex, year }) => {
  useEffect(() => {
    getBirths(county, sex, year);
  }, [getBirths]);

  return <ByYears values={births} valueName='Births' year={year} />;
};

const mapStateToProps = state => ({
  births: state.charts.births,
  county: state.charts.county,
  sex: state.charts.sex,
  year: state.charts.year
});

export default connect(
  mapStateToProps,
  { getBirths }
)(BirthChart);
