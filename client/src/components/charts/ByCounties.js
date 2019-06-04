import React, { Fragment } from 'react';
import * as d3 from 'd3';

const ByCounties = ({ chartWidth, values, valueName, year, sex }) => {
  const width = chartWidth;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 20, left: 70 };

  const blue = '#007bff';
  const green = '#4BBF73';
  
  const valuesMap = values.map(item => parseInt(item.value, 10));
  const valuesMin = d3.min(valuesMap);
  const valuesMax = d3.max(valuesMap);

  const colorScale = d3.scaleLinear()
    .range([green, blue])
    .domain([0, values.length]);

  const xScale = d3
    .scaleBand()
    .padding(0.2)
    .range([margin.left, width - margin.right])
    .domain(values.map(d => d.county.name));

  const yScale = d3
    .scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([valuesMin, valuesMax]);

  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickFormat(d => d);

  const yAxisScale = d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([valuesMin, valuesMax])

  const yAxis = d3.axisLeft().scale(yAxisScale);

  d3.select('#xAxisCounties').call(xAxis);
  d3.select('#yAxisCounties').call(yAxis);

  const bars = values.map((d, i) => { 
    return {
      x: xScale(d.county.name) ,
      y: yScale(d.value) - margin.bottom,
      width: xScale.bandwidth(),
      height: height - yScale(d.value),
      fill: colorScale(i)
    };
  });

  return (
    <Fragment>
      <h2 className='text-center mb-5'>
        {`${sex} ${valueName} in ${
        values.length !== 0 ? year : ''
      } by County`}
      </h2>
      <svg 
        className='mb-5'
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`}
      >
        {bars.map((d, i) => (
          <rect
            key={`bar-${i}`}
            x={d.x}
            y={d.y}
            width={d.width}
            height={d.height}
            fill={d.fill}
          />
        ))}
        <g>
          <g
            id='xAxisCounties'
            transform={`translate(0, ${height - margin.bottom})`}
          />
          <g id='yAxisCounties' transform={`translate(${margin.left}, 0)`} />
        </g>
      </svg>
    </Fragment>
  );
};

export default ByCounties;
