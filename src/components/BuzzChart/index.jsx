import {
  axisBottom,
  extent,
  max,
  scaleLinear,
  timeFormat,
  scaleTime,
  select,
  line,
  axisRight,
  format,
} from "d3";
import React, { useEffect, useRef } from "react";
import { ChartWrapper } from "../CategoryChart/style";
import useResizeObserver from "@utils/useResizeObserver";

const data = [
  { date: new Date("2018-01-01"), value: 1 },
  { date: new Date("2018-01-02"), value: 2 },
  { date: new Date("2018-01-03"), value: 3 },
  { date: new Date("2018-01-04"), value: 2 },
  { date: new Date("2018-01-05"), value: 3 },
  { date: new Date("2018-01-06"), value: 4 },
  { date: new Date("2018-01-07"), value: 3 },
  { date: new Date("2018-01-08"), value: 5 },
];

const BuzzChart = ({
  width = 500,
  height = 300,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  padding = 0,
}) => {
  const buzzChartRef = useRef();
  const svgRef = useRef();
  const dimensions = useResizeObserver(buzzChartRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const { width, height } = dimensions;
    svg.attr("width", width).attr("height", height);

    const xScale = scaleTime()
      .domain(extent(data, (data) => data.date))
      .range([marginLeft + padding, width]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(timeFormat("%m-%d"));
    // .tickSizeOuter(0);

    svg
      .select(".x-axis")
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .style("transform", `translateY(${height - marginBottom}px)`);

    const maxValue = max(data, (data) => data.value);

    const yScale = scaleLinear()
      .domain([-maxValue, maxValue])
      .nice()
      .range([height - marginBottom, marginTop]);

    const yAxis = axisRight(yScale)
      .tickValues([-maxValue, 0, maxValue])
      .tickFormat(format("d"));

    svg
      .select(".y-axis")
      .call(yAxis)
      .style("transform", `translateX(${marginLeft}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll("line")
          .attr("x1", marginLeft)
          .attr("x2", width - marginRight)
          .style("stroke", "#ddd"),
      );

    const chartLine = line()
      .defined((d) => !isNaN(d.value))
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));

    svg
      .selectAll("buzzpath")
      .data([data])
      .join("path")
      .classed(".buzzpath", true)
      .attr("fill", "none")
      .attr("stroke", "#ee9696")
      .attr("stroke-width", 3)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", chartLine);
  }, [data, dimensions]);
  return (
    <ChartWrapper ref={buzzChartRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </ChartWrapper>
  );
};

export default BuzzChart;
