import React, { useEffect } from 'react';

// imported components
import ByYears from './ByYears';
import ByCounties from './ByCounties';

// Redux
import { connect } from 'react-redux';
import { getBirths } from '../../actions/charts';

const BirthChart = ({ getBirths, births, county, sex, year, filterType }) => {
  useEffect(() => {
    getBirths(county, sex, year);
  }, [filterType]);

  return (
    filterType === 'years' ? 
    <ByYears values={births} valueName='Births' year={year} />
    : <ByCounties 
        values={births} 
        valueName='Born' 
        sex={sex[0] === '1' ? 'Males' : 'Females'}  
        year={year}
      />
  )
};

const mapStateToProps = state => ({
  births: state.charts.births,
  county: state.charts.county,
  sex: state.charts.sex,
  year: state.charts.year,
  filterType: state.charts.filterType
});

export default connect(
  mapStateToProps,
  { getBirths }
)(BirthChart);
