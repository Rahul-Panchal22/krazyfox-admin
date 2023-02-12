import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";


export const options = {
  pieHole: 0,
  is3D: false,
  legend: { position: "bottom", maxLines: 2, },
  colors: ['#5E3FBE', '#FFA500'],
};

const CreatorsAge = ({ creatorsAgeData }) => {

  const [ageData , setAgeData ] = useState([]);
  let data = [["Age", "Hours per Day"]] ;
  var hashMap = {}

  useEffect(()=>{

    creatorsAgeData?.map((item) => {
      if(item?.is_minor === 1){
        data.push(...data,["Minor",item?.ageCount])
      }
      else
      {
        data.push(...data,["Adult",item?.ageCount])
      }
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
  },[creatorsAgeData])
  console.log('creatorsAgeData: ', creatorsAgeData);

return (
    <>
      <h3>Age</h3>
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

export default CreatorsAge;
