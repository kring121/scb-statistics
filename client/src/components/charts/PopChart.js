import React, { useEffect } from 'react';

// imported components
import ByYears from './ByYears';
import ByCounties from './ByCounties';

// Redux
import { connect } from 'react-redux';
import { getPopulation } from '../../actions/charts';

const PopChart = ({ getPopulation, population, county, sex, year, filterType }) => {
  useEffect(() => {
    getPopulation(county, sex, year);
  }, [filterType]);
  return (
    filterType === 'years' ? 
    <ByYears values={population} valueName='Population' year={year} />
    : <ByCounties 
        values={population} 
        valueName='Population' 
        sex={sex[0] === '1' ? 'Male' : 'Female'}  
        year={year}
      />
  )
};

const mapStateToProps = state => ({
  population: state.charts.population,
  county: state.charts.county,
  sex: state.charts.sex,
  year: state.charts.year,
  filterType: state.charts.filterType
});

export default connect(
  mapStateToProps,
  { getPopulation }
)(PopChart);
