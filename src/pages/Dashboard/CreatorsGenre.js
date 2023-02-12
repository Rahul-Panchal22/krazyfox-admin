import React, { useEffect, useState } from "react";
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

const CreatorsGenre = ({ creatorsGenre }) => {
  const [ageData , setAgeData ] = useState([]);
  let data = [["Age", "Hours per Day"]] ;
  var hashMap = {}

  useEffect(()=>{

    creatorsGenre?.map((item) => {
        data.push(...data,[item?.genre,item?.genreCount])
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
  },[creatorsGenre])

  return (
    <>
    <h3>Genre</h3>
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

export default CreatorsGenre;
