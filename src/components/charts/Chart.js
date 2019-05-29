import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getPopulation } from '../../actions/charts';

const Chart = ({ getPopulation }) => {
  useEffect(() => {
    getPopulation('all');
  }, [getPopulation]);

  return <h1>Chart</h1>;
};

export default connect(
  null,
  { getPopulation }
)(Chart);
