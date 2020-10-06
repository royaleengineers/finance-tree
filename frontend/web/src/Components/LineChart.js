import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart () {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: 'expenditure in each month',
        data: [30, 20, 20, 10, 50,20,30,40,60,10,20,30],
        borderColor: ['rgba(255, 206, 86, 0.2)'],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
        pointBorderColor: 'rgba(255, 206, 86, 0.2)'
      }
      
    ]
  }

  

  return <Line data={data}  />
}

export default LineChart