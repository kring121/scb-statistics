import React, { Fragment } from 'react';
import * as d3 from 'd3';

const ByYears = ({ values, valueName, year }) => {
  const width = 675;
  const height = 400;
  const blue = '#0074D9';
  const pink = '#F012BE';
  const margin = { top: 20, right: 20, bottom: 20, left: 70 };

  const yearsMin = d3.min(year);
  const yearsMax = d3.max(year);
  const valuesMap = values.map(item => parseInt(item.value, 10));
  const valuesMin = d3.min(valuesMap);
  const valuesMax = d3.max(valuesMap);

  const xScale = d3
    .scaleLinear()
    .range([margin.left, width - margin.right])
    .domain([yearsMin, yearsMax]);

  const yScale = d3
    .scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([valuesMin, valuesMax]);

  const males = values.filter(d => d.sex === '1');
  const females = values.filter(d => d.sex === '2');

  const lineGenerator = d3.line();

  lineGenerator.x(d => xScale(d.year));
  lineGenerator.y(d => yScale(parseInt(d.value, 10)));

  const malePopLine = lineGenerator(males);
  const femalePopLine = lineGenerator(females);

  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .ticks(year.length)
    .tickFormat(d => d);
  const yAxis = d3.axisLeft().scale(yScale);

  values.length === 0 ? null : d3.select('#xAxisG').call(xAxis),
    d3.select('#yAxisG').call(yAxis);

  return (
    <Fragment>
      <h2 className='text-center'>{`${valueName} in ${
        values.length !== 0 ? values[0].county.name : ''
      } ${yearsMin} - ${yearsMax}`}</h2>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path d={malePopLine} fill='none' stroke={blue} strokeWidth='5' />
        <path d={femalePopLine} fill='none' stroke={pink} strokeWidth='5' />
        {males.map((d, i) => (
          <circle
            key={`malepoint-${i}`}
            r='5'
            cx={xScale(d.year)}
            cy={yScale(d.value)}
            fill={blue}
          />
        ))}
        {females.map((d, i) => (
          <circle
            key={`femalepoint-${i}`}
            r='5'
            cx={xScale(d.year)}
            cy={yScale(d.value)}
            fill={pink}
          />
        ))}
        <g>
          <g
            id='xAxisG'
            transform={`translate(0, ${height - margin.bottom})`}
          />
          <g id='yAxisG' transform={`translate(${margin.left}, 0)`} />
        </g>
      </svg>
    </Fragment>
  );
};

export default ByYears;
