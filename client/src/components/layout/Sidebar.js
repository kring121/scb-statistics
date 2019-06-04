import React, { Fragment, useEffect } from 'react';

// imported components
import YearsFilter from './YearsFilter';
import CountiesFilter from './CountiesFilter';
import { Button, ButtonGroup } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { getCounties, setFilterType } from '../../actions/charts';

const Sidebar = ({ getCounties, setFilterType, countyList, filterType }) => {
  useEffect(() => {
    getCounties();
  }, [getCounties]);
  return (
    <Fragment>
      <h1>Filter By:</h1>
      <ButtonGroup>
        <Button onClick={() => setFilterType('years')}>Years</Button>
        <Button onClick={() => setFilterType('counties')}>Counties</Button>
      </ButtonGroup>
      <h1 className='mb-3'>Filter Results</h1>
      {
        filterType === 'years' ?
        <YearsFilter countyList={countyList} />
        : <CountiesFilter countyList={countyList} />
      }
    </Fragment>
  );
};

const mapStateToProps = state => ({
  countyList: state.charts.countyList,
  filterType: state.charts.filterType
});

export default connect(
  mapStateToProps,
  { getCounties, setFilterType }
)(Sidebar);
