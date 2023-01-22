import React, { useEffect, useState } from "react";
import { fetchdailyBodyFatMass,fetchdailyFatFreeMass,fetchdailySkeletalMuscleMass } from "./Data";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [dailyBodyFatMass, setdailyBodyFatMass] = useState([]);
  const [dailyFatFreeMass, setdailyFatFreeMass] = useState([]);
  const [dailySkeletalMuscleMass, setdailySkeletalMuscleMass] = useState([]);

  const fetchApi = async () => {
    const dailyBodyFatMass = await fetchdailyBodyFatMass();
    setdailyBodyFatMass(dailyBodyFatMass);
    const dailyFatFreeMass = await fetchdailyFatFreeMass();
    setdailyFatFreeMass(dailyFatFreeMass);
    const dailySkeletalMuscleMass = await fetchdailySkeletalMuscleMass();
    setdailySkeletalMuscleMass(dailySkeletalMuscleMass);
  };


  useEffect(() => {
    fetchApi();
  }, []);
  
  const lineBodyFat = dailyBodyFatMass  ? (

    <Line
      data={{
        labels: Array.from(dailyBodyFatMass.keys()),
        datasets: [
          {
            data: Array.from(dailyBodyFatMass.entries()),
            label: "Body Fat Mass (Goal should be around 8-19%)",
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
      <div>{lineBodyFat}</div>
      <div>{lineChartFatFreeMass}</div>
      <div>{lineChartSkeletalMuscleMass}</div>
    </>
  );
};

export default LineChart;