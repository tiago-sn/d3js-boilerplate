import * as d3 from 'd3';
import './style.css';

const data = [4, 8, 15, 16, 23, 42, 23, 16, 15, 8, 4];

const max = d3.max(data);
let x: d3.ScaleLinear<number, number>;

if (max) {
  x = d3
    .scaleLinear()
    .domain([0, max])
    .range([0, 120]);
}

d3.select('.chart')
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .style('width', d => {
    return x(d) + 'px';
  })
  .style('height', d => {
    return x(d) + 'px';
  })
  .text(function(d) {
    return d;
  });
