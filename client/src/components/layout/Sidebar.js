import React, { Fragment, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getCounties } from '../../actions/charts';
import YearsFilter from './YearsFilter';

const Sidebar = ({ getCounties, countyList }) => {
  useEffect(() => {
    getCounties();
  }, [getCounties]);
  return (
    <Fragment>
      <h1 className='mb-3'>Filter Results</h1>
      <YearsFilter countyList={countyList} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  countyList: state.charts.countyList
});

export default connect(
  mapStateToProps,
  { getCounties }
)(Sidebar);
