import React, { useEffect, useState } from "react";
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

const CreatorsState = ({ creatorsState }) => {
  // console.log('creatorsState: ', creatorsState);
  
  const chartData = [['Age', 'Hours per Day']];
creatorsState?.forEach(item => {
  chartData.push([item?.state,item?.stateCount]);
});
console.log('chartData: ', chartData);
 
  return (
    <>
    <h3>State</h3>
      <Chart
        chartType="PieChart"
        width="100%"
        height="280px"
        data={chartData}
        options={options}
      />
    </>
  );
};

export default CreatorsState;
