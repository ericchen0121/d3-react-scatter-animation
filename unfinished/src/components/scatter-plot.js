import React, { Component } from 'react';
import d3 from 'd3';
import DataCircles from './data-circles';

// returns the largest x and y coordinates from the dataset
// second argument maps the data array to access the x and y coordinates
const xMax = (data) => d3.max(data, (d) => d[0])
const yMax = (data) =>d3.max(data, (d) => d[1]);

// returns a function that 'scales the x coordinates from the data to fit the chart
const xScale = (props) => {
  return d3.scale.linear()
    .domain([0, xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2])
}

const yScale = (props) => {
  return d3.scale.linear()
    .domain([0, yMax(props.data)]) // the range of the data values (possible input values)
    .range([props.padding, props.height - props.padding * 2]) //  the range of our chart (possible output values)
}


// xScale is a d3 scale with a domain and range
// then you call the d3 scale with a value to compute coordinates
//
export default (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return <svg width={props.width} height={props.height}>
    <DataCircles {...props} {...scales} />
  </svg>
}
