// import a graph library
import * as d3 from 'd3';

// import a csv file and plot it on the graph
d3.csv('data.csv').then(function(data) {
  // create a graph
  const svg = d3.select('svg');
  const width = +svg.attr('width');
  const height = +svg.attr('height');
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // create a scale for the x axis
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([0, innerWidth]);

  // create a scale for the y axis
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([innerHeight, 0]);

  // create a line generator
  const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

  // append a path to the graph
  svg.append('path')
    .attr('d', line(data))
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
});