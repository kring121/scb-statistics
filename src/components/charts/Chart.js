import React, { useEffect } from 'react';

// Components
import PopChart from './PopChart';

// Redux
import { connect } from 'react-redux';
import { getPopulation } from '../../actions/charts';

const Chart = ({ getPopulation, sex, years, regions }) => {
  useEffect(() => {
    getPopulation(sex, years, regions);
  }, [getPopulation]);

  return (
    <div>
      <h1 onClick={() => getPopulation(['1'], years, regions)}>Male</h1>
      <h1 onClick={() => getPopulation(['2'], years, regions)}>Female</h1>
      <h1 onClick={() => getPopulation('all', years, regions)}>Both</h1>
      <PopChart sex={sex} years={years} regions={regions} />
    </div>
  );
};

const mapStateToProps = state => ({
  sex: state.charts.selection.sex,
  years: state.charts.selection.years,
  regions: state.charts.selection.regions
});

export default connect(
  mapStateToProps,
  { getPopulation }
)(Chart);
