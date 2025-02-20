Strength Tracking


Purpose:
The purpose of this repository is to track the development and provide source code for the React app used to track my strength training progress.


Methdology:
1) The data will be uploaded to a google drive location, where the react app will fetch data from.

      a) The reason for this roundabout way of doing things, is because Samsung Health does not give access to their API to the public.
  
2) Once I get the data from google drive, it will be parsed and displayed on the front-end. To show a few key statistics:

      a) Weight - This should go down with time, and then stagnate, as fat turns into muscle.
      
      b) Fat Free Mass - This should go up. 
      
      c) Skeletal Muscle Mass- This should go up.

3) To evaluate the above stastistics, I will be using a line graph. To track these three metrics over time (time is x, metric is Y).


