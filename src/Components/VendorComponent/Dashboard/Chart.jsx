import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register( ArcElement,Tooltip);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Sales Line Chart',
    },
  },
};
export const data = {
    labels: ['Total', 'Complete', 'Pending', 'Processing', 'Cancelled', 'Refunded','On hold'],
    datasets: [
      {
        Legend:false,
        data: [12, 1, 3, 5, 2, 3,1],
        backgroundColor: [
          'rgba(224, 36, 36,0.8)',
          'rgba(14, 159, 110,1)',
          'rgba(156 ,163 ,175,1)',
          'rgba(63 ,131 ,248,0.8)',
          'rgba(155, 28, 28,0.8)',
          'rgba(252, 233, 106,0.8)',
          'rgba(227, 160, 8,0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };
  
  export function Charts() {
    return <Doughnut options={options} data={data} />;
  }