import * as d3 from "d3";

let url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmIgHA9m-9NI2a3UXPiwSZAF4AOAmH6GnoK0ruXx-8KB1raSk0U2USn1TKQ-cY5ohjr-P5KXwFgH79/pub?output=csv";  

  export const fetchdailyFatFreeMass = async () => {
    try {
        let fatFreeMass = new Map();
        await d3.csv(url).then((data) => {
            //if (error) throw error;
            
            for (var i=0;i<data.length;i++){
                if (parseInt(data[i]['fat_free']) >0) {
                fatFreeMass.set(data[i]['start_time'],data[i]['fat_free']);
                }
              }
            fatFreeMass = new Map([...fatFreeMass].sort());
      
          })
          if (fatFreeMass != undefined) {
            return fatFreeMass;
          }
   
    } catch (err) {
      console.log(err);
    }
  };
  export const fetchdailyWeight = async () => {
    try {
        let weight = new Map();
        await d3.csv(url).then((data) => {
            //if (error) throw error;
            
            for (var i=0;i<data.length;i++){
              // 01-10-2023 is the first date that i used my real Weight...not the same value as the 
              // previous measurement....
              if (Date.parse(data[i]['start_time'])>Date.parse("2023-01-10 23:59:59")) { 
                weight.set(data[i]['start_time'],parseInt(data[i]['weight'])*2.20462);
              }
                
            }
        weight = new Map([...weight].sort());
        //console.log(weight);
        })
        if (weight != undefined) {
        return weight;
        }
    } catch (err) {
      console.log(err);
    }
  };

  export const fetchdailySkeletalMuscleMass = async () => {
    try {
        let skeletalMuscle = new Map();
        await d3.csv(url).then((data) => {
            //if (error) throw error;
            
            for (var i=0;i<data.length;i++){                
              if (parseInt(data[i]['skeletal_muscle']) >0) {
                skeletalMuscle.set(data[i]['start_time'],data[i]['skeletal_muscle']);
              }
              
            }
          skeletalMuscle = new Map([...skeletalMuscle].sort());
        //console.log(bodyFat);
        })
        if (skeletalMuscle != undefined) {
        return skeletalMuscle;
        }
    } catch (err) {
      console.log(err);
    }
  };
