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
  export const fetchdailyBodyFatMass = async () => {
    try {
        let bodyFat = new Map();
        await d3.csv(url).then((data) => {
            //if (error) throw error;
            
            for (var i=0;i<data.length;i++){
              if (parseInt(data[i]['body_fat']) >0) { 
                bodyFat.set(data[i]['start_time'],data[i]['body_fat']);
              }
                
            }
        bodyFat = new Map([...bodyFat].sort());
        //console.log(bodyFat);
        })
        if (bodyFat != undefined) {
        return bodyFat;
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
