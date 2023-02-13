import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";


export const options = {
  pieHole: 0,
  is3D: false,
  legend: { position: "bottom", maxLines: 2, },
  colors: ['#8D79F6', '#FFA500'],
};

const CreatorsAge = ({ creatorsAgeData }) => {
  const chartData = [['Age', 'Hours per Day']];
  creatorsAgeData?.forEach(item => {
    chartData.push([item?.gender,item?.genderCount]);
    if(item?.is_minor === 1){
    chartData.push(["Minor",item?.ageCount]);
    }
    else
    {
    chartData.push(["Adult",item?.ageCount]);
    }
  });
  console.log('chartData: ', chartData);
 
return (
    <>
      <h3>Age</h3>
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

export default CreatorsAge;
