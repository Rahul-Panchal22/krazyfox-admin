import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Age", "Hours per Day"],
  ["Minor", 70],
  ["Adult", 30],
];

export const options = {
  pieHole: 0,
  is3D: false,
  legend: { position: "bottom", maxLines: 2, },
  colors: ['#FFC316', '#555555'],
};

const CreatorsGender = ({ creatorsGender }) => {
  // console.log('creatorsGender: ', creatorsGender);
  const chartData = [['Age', 'Hours per Day']];
  creatorsGender?.forEach(item => {
    chartData.push([item?.gender,item?.genderCount]);
  });
  console.log('chartData: ', chartData);
 
  return (
    <>
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

export default CreatorsGender;
