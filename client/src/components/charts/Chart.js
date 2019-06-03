import React, { useEffect } from 'react';

// imported components
import PopChart from './PopChart';
import BirthChart from './BirthChart';

// Redux
import { connect } from 'react-redux';

const Chart = ({ category }) => {
  return <div>{category === 'population' ? <PopChart /> : <BirthChart />}</div>;
};

const mapStateToProps = state => ({
  category: state.charts.category
});

export default connect(mapStateToProps)(Chart);
