import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart () {
  fetch("http://localhost:8000/sample").then(
    res=>res.json()
  ).then(
    (result)=>{
      var labels = [];
      var vals = [];
      for (var prop in result) {
        labels.push(prop);
        vals.push(result[prop]);
      }
      const data = {
        labels,
        datasets: [
          {
            label: 'expenditure in each month',
            data: vals,
            borderColor: ['rgba(255, 206, 86, 0.2)'],
            backgroundColor: ['rgba(255, 206, 86, 0.2)'],
            pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
            pointBorderColor: 'rgba(255, 206, 86, 0.2)'
          }
          
        ]
      };
    
      
      return <Line data={data}  />
    }
  );
}

export default LineChart;