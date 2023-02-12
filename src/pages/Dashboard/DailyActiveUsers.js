import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Industrial Average", "Influencer Average"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  isStacked: true,
  chartArea: {
    top: 10,
    right: 0,
    left: 20,
  },
  height: 180,
  width: '100%',
  legend: {position: 'none'},
  hAxis: {
    textPosition: 'none',
    title: "Date",
    minValue: 100,
  },
  vAxis: {
    textPosition: 'none',
    title: "Users",
    minValue: 0
  }
};

const DailyActiveUsers = () => {

  return (
    <>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="160px"
        data={data}
        options={options}
      />
    </>
  );
};

export default DailyActiveUsers;