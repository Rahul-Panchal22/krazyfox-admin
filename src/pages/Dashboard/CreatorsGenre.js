import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Age", "Hours per Day"],
  ["Beauty", 70],
  ["Fashion", 30],
  ["Lifestyle", 30],
  ["Travel", 30],
  ["Comedy", 30],
];

export const options = {
  pieHole: 0.65,
  is3D: false,
  legend: { position: "bottom", maxLines: 2, veticle: true, },
  colors: ['#8D79F6', '#71F17D', '#FEBD38', '#4FBAF0', '#003f5c'],
};

const CreatorsGenre = () => {

  return (
    <>
      <Chart
        chartType="PieChart"
        width="100%"
        height="280px"
        data={data}
        options={options}
      />
    </>
  );
};

export default CreatorsGenre;
