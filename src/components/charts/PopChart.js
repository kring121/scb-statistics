import React from 'react';
import * as d3 from 'd3';

// Redux
import { connect } from 'react-redux';

const PopChart = ({ population, sex, years, regions }) => {
  const width = 675;
  const height = 400;
  const blue = '#0074D9';
  const pink = '#F012BE';
  const margin = { top: 20, right: 20, bottom: 20, left: 70 };

  const yearsMin = d3.min(years);
  const yearsMax = d3.max(years);
  const populationMap = population.map(pop => parseInt(pop.values[0], 10));
  const popMin = d3.min(populationMap);
  const popMax = d3.max(populationMap);

  const xScale = d3
    .scaleLinear()
    .range([margin.left, width - margin.right])
    .domain([yearsMin, yearsMax]);

  const yScale = d3
    .scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([popMin, popMax]);

  const men = population.filter(d => d.key[1] === '1');
  const women = population.filter(d => d.key[1] === '2');

  const lineGenerator = d3.line();

  lineGenerator.x(d => xScale(d.key[2]));
  lineGenerator.y(d => yScale(parseInt(d.values[0], 10)));

  const menPopLine = lineGenerator(men);
  const womenPopLine = lineGenerator(women);

  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .ticks(years.length)
    .tickFormat(d => d);
  const yAxis = d3.axisLeft().scale(yScale);

  population.length === 0 ? null : d3.select('#xAxisG').call(xAxis),
    d3.select('#yAxisG').call(yAxis);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d={menPopLine} fill='none' stroke={blue} strokeWidth='5' />
      <path d={womenPopLine} fill='none' stroke={pink} strokeWidth='5' />
      {men.map((d, i) => (
        <circle
          key={`menpoint-${i}`}
          r='5'
          cx={xScale(d.key[2])}
          cy={yScale(d.values[0])}
          fill={blue}
        />
      ))}
      {women.map((d, i) => (
        <circle
          key={`womenpoint-${i}`}
          r='5'
          cx={xScale(d.key[2])}
          cy={yScale(d.values[0])}
          fill={pink}
        />
      ))}
      <g>
        <g id='xAxisG' transform={`translate(0, ${height - margin.bottom})`} />
        <g id='yAxisG' transform={`translate(${margin.left}, 0)`} />
      </g>
    </svg>
  );
};

const mapStateToProps = state => ({
  population: state.charts.population
});

export default connect(mapStateToProps)(PopChart);
