import React, { Fragment } from 'react';
import * as d3 from 'd3';

const ByCounties = ({ values, valueName, sex, year, county }) => {
  const width = 675;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 20, left: 70 };
  
  const valuesMap = values.map(item => parseInt(item.value, 10));
  const valuesMin = d3.min(valuesMap);
  const valuesMax = d3.max(valuesMap);

  const xScale = d3
    .scaleBand()
    .padding(0.2)
    .range([margin.left, width - margin.right])
    .domain(values.map(d => d.county.name));

  const yScale = d3
    .scaleLinear()
    .range([margin.top, height - margin.bottom])
    .domain([valuesMin, valuesMax]);

  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickFormat(d => d);
  const yAxis = d3.axisLeft().scale(yScale);

  d3.select('#xAxisG').call(xAxis);
  d3.select('#yAxisG').call(yAxis);

  const bars = values.map(d => {
    return {
      x: xScale(d.county.name) ,
      y: height - margin.bottom - yScale(d.value),
      width: xScale.bandwidth(),
      height: yScale(d.value)
    };
  });

  return (
    <Fragment>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {bars.map((d, i) => (
          <rect
            key={`bar-${i}`}
            x={d.x}
            y={d.y}
            width={d.width}
            height={d.height}
            fill='black'
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

export default ByCounties;
