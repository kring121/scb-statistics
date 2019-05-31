import React from 'react';
import * as d3 from 'd3';

// Redux
import { connect } from 'react-redux';

const PopChart = ({ population, sex, years, regions }) => {
  const width = 650;
  const height = 400;
  const margin = { top: 20, right: 5, bottom: 20, left: 35 };

  const yearsMin = d3.min(years);
  const yearsMax = d3.max(years);
  const populationMap = population.map(pop => parseInt(pop.values[0], 10));
  const popMin = d3.min(populationMap);
  const popMax = d3.max(populationMap);

  const xScale = d3
    .scaleLinear()
    .range([10, width - 40])
    .domain([yearsMin, yearsMax]);

  const yScale = d3
    .scaleLinear()
    .range([height - 10, 10])
    .domain([popMin, popMax]);

  // const bars = population.map(d => {
  //   return {
  //     x: xScale(d.key[2]),
  //     y: yScale(d.values[0]),
  //     fill: 'red'
  //   };
  // });
  // {bars.map((d, i) => (
  //   <rect key={i} x={d.x} y='0' width='40' height={d.y} fill={d.fill} />
  // ))}

  const men = population.filter(d => d.key[1] === '1');
  const women = population.filter(d => d.key[1] === '2');

  const lineGenerator = d3.line();

  lineGenerator.x(d => xScale(d.key[2]));
  lineGenerator.y(d => yScale(parseInt(d.values[0], 10)));

  const menPop = lineGenerator(men);
  const womenPop = lineGenerator(women);

  return (
    <svg width={width} height={height}>
      <path d={menPop} fill='none' stroke='blue' strokeWidth='5' />
      <path d={womenPop} fill='none' stroke='pink' strokeWidth='5' />
      {men.map(d => (
        <circle
          r='5'
          cx={xScale(d.key[2])}
          cy={yScale(d.values[0])}
          fill='blue'
        />
      ))}
      {women.map(d => (
        <circle
          r='5'
          cx={xScale(d.key[2])}
          cy={yScale(d.values[0])}
          fill='pink'
        />
      ))}
    </svg>
  );
};

const mapStateToProps = state => ({
  population: state.charts.population
});

export default connect(mapStateToProps)(PopChart);
