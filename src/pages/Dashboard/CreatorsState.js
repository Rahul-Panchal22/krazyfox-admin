import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Age", "Hours per Day"],
  ["Maharashtra", 70],
  ["MP", 30],
  ["Goa", 30],
  ["Kerala", 30],
  ["Tamilnadu", 30],
];

export const options = {
  pieHole: 0.65,
  is3D: false,
  legend: { position: "bottom", maxLines: 2, veticle: true, },
  colors: ['#FEBD38', '#4FBAF0', '#FE464B', '#FF5CBE', '#68EE76'],
};

const CreatorsState = () => {

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

export default CreatorsState;
