import React, { Fragment, useEffect } from 'react';
import * as d3 from 'd3';

// Redux
import { connect } from 'react-redux';
import { getCountyNames } from '../../actions/charts';

const ByCounties = ({ getCountyNames, values, valueName, year, county }) => {
  useEffect(() => {
    getCountyNames(county);
  }, [getCountyNames]);
  // const width = 675;
  // const height = 400;
  // const margin = { top: 20, right: 20, bottom: 20, left: 70 };

  // const valuesMap = values.map(item => parseInt(item.value, 10));
  // const valuesMin = d3.min(valuesMap);
  // const valuesMax = d3.max(valuesMap);

  // const xScale = d3.

  // const xScale = d3
  //   .scaleLinear()
  //   .range([margin.left, width - margin.right])
  //   .domain([yearsMin, yearsMax]);

  // const yScale = d3
  //   .scaleLinear()
  //   .range([height - margin.bottom, margin.top])
  //   .domain([valuesMin, valuesMax]);

  // const males = values.filter(d => d.sex === '1');
  // const females = values.filter(d => d.sex === '2');

  // const lineGenerator = d3.line();

  // lineGenerator.x(d => xScale(d.year));
  // lineGenerator.y(d => yScale(parseInt(d.value, 10)));

  // const malePopLine = lineGenerator(males);
  // const femalePopLine = lineGenerator(females);

  // const xAxis = d3
  //   .axisBottom()
  //   .scale(xScale)
  //   .ticks(year.length)
  //   .tickFormat(d => d);
  // const yAxis = d3.axisLeft().scale(yScale);

  // values.length === 0 ? null : d3.select('#xAxisG').call(xAxis),
  //   d3.select('#yAxisG').call(yAxis);

  return <Fragment />;
};

export default connect(
  null,
  { getCountyNames }
)(ByCounties);
