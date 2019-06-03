import React, { useEffect } from 'react';

// imported components
import ByYears from './ByYears';

// Redux
import { connect } from 'react-redux';
import { getBirths } from '../../actions/charts';

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
