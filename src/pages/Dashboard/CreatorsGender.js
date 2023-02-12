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
  console.log('creatorsGender: ', creatorsGender);
  const [ageData , setAgeData ] = useState([]);
  let data = [["Age", "Hours per Day"]] ;
  var hashMap = {}

  useEffect(()=>{

    creatorsGender?.map((item) => {
        data.push(...data,[item?.gender,item?.genderCount])
    })
    console.log('data: ', data);

    data.forEach(function(arr){
      // If your subArrays can be in any order, you can use .sort to have consistant order
      hashMap[arr.join("|")] = arr;
    });
    
    var result = Object.keys(hashMap).map(function(k){
      return hashMap[k]
    });
    
    setAgeData(result)
  },[creatorsGender])
  console.log('creatorsGender: ', creatorsGender);

  return (
    <>
      <Chart
        chartType="PieChart"
        width="100%"
        height="280px"
        data={ageData}
        options={options}
      />
    </>
  );
};

export default CreatorsGender;
