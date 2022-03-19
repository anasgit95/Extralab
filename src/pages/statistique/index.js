import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [10, 5, 3, 2, 0, 10, 20],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <div className='chartContainer'>
      <h1> Statistiques du nombre de films ajoutés aux favoris par jour </h1>
  <ReactECharts option={options} />;
  </div>
};

export default Page;
  

  
 