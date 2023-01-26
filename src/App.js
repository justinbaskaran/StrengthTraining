import React, { useEffect, useState } from "react";
import { fetchdailyWeight,fetchdailyFatFreeMass,fetchdailySkeletalMuscleMass } from "./Data";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [dailyWeight, setdailyWeight] = useState([]);
  const [dailyFatFreeMass, setdailyFatFreeMass] = useState([]);
  const [dailySkeletalMuscleMass, setdailySkeletalMuscleMass] = useState([]);

  const fetchApi = async () => {
    const dailyWeight = await fetchdailyWeight();
    setdailyWeight(dailyWeight);
    const dailyFatFreeMass = await fetchdailyFatFreeMass();
    setdailyFatFreeMass(dailyFatFreeMass);
    const dailySkeletalMuscleMass = await fetchdailySkeletalMuscleMass();
    setdailySkeletalMuscleMass(dailySkeletalMuscleMass);
  };


  useEffect(() => {
    fetchApi();
  }, []);
  
  const lineWeight = dailyWeight  ? (

    <Line
      data={{
        labels: Array.from(dailyWeight.keys()),
        datasets: [
          {
            data: Array.from(dailyWeight.entries()),
            label: "Weight (lbs)",
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          }
        ],
      }}
    />
    
  ) : null;

  const lineChartFatFreeMass = dailyFatFreeMass  ? (

    <Line
      data={{
        labels: Array.from(dailyFatFreeMass.keys()),
        datasets: [
          {
            data: Array.from(dailyFatFreeMass.entries()),
            label: "Fat Free Mass (Goal should be around 78-90%)",
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          }
        ],
      }}
    />
    
  ) : null;

  const lineChartSkeletalMuscleMass = dailySkeletalMuscleMass  ? (

    <Line
      data={{
        labels: Array.from(dailySkeletalMuscleMass.keys()),
        datasets: [
          {
            data: Array.from(dailySkeletalMuscleMass.entries()),
            label: "Skeletal Muscle Mass (Goal should be around 75jk-89%)",
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          }
        ],
      }}
    />
    
  ) : null;

  return (
    <>
      <center><h1>Strength Training Metrics</h1></center>
      <div>{lineWeight}</div>
      <div>{lineChartFatFreeMass}</div>
      <div>{lineChartSkeletalMuscleMass}</div>
    </>
  );
};

export default LineChart;