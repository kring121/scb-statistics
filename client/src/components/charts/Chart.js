import React, { useEffect, useState, useRef } from 'react';

// imported components
import PopChart from './PopChart';
import BirthChart from './BirthChart';

// Redux
import { connect } from 'react-redux';

const Chart = ({ category }) => {
  const chartContainer = useRef(null);
  const [chartWidth, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener('resize', updateChartWidth);
    setWidth(chartContainer.current.getBoundingClientRect().width)
  }, []);

  const updateChartWidth = () => {
    setWidth(chartContainer.current.getBoundingClientRect().width)
  }

  return(
    <div ref={chartContainer}>
      {
        category === 'population' ? 
        <PopChart chartWidth={chartWidth} /> 
        : <BirthChart chartWidth={chartWidth} />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  category: state.charts.category
});

export default connect(mapStateToProps)(Chart);
