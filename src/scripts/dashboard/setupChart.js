'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

const chartContext = document.querySelector('#sells-data-chart').getContext('2d');
const sellsData = LocalStorageManager.getAll('sells') || [];
const monthsLabels = [];
const fourLastMonthsTotalValues = [100, 200, 300, 400];

sellsData.forEach((sellData) => {
  sellData.transactionDate = new Date(sellData.transactionDate);
  sellData.transactionFinalValue = Number(sellData.transactionFinalValue);
});

sellsData.sort((sellA, sellB) => {
  return sellB.transactionDate - sellA.transactionDate;
});

const monthRange = 4;
const currentMonth = new Date().getMonth();
for (let i = currentMonth; i > (currentMonth - monthRange); i--) {
  const monthLabel = getMonthName(i);
  monthsLabels.push(monthLabel);
}

/* let currentMonthSum = 0;
let lastMonthSum = 0;
let thirdLastMonthSum = 0;
let fourthLastMonthSum = 0;
sellsData.forEach((sell) => {
  const currentMonthNumber = sell.transactionDate.getMonth();

  if (currentMonthNumber === currentMonth) {
    currentMonthSum += sell.transactionFinalValue;
  } else if (currentMonthNumber === currentMonth - 1) {
    lastMonthSum += sell.transactionFinalValue;
  } else if (currentMonthNumber === currentMonth - 2) {
    thirdLastMonthSum += sell.transactionFinalValue;
  } else if (currentMonthNumber === currentMonth - 3) {
    fourthLastMonthSum += sell.transactionFinalValue;
  }
}); */

//fourLastMonthsTotalValues.push(currentMonthSum, lastMonthSum, thirdLastMonthSum, fourthLastMonthSum);

const chartConfig = {
  type: 'doughnut',
  data: {
    labels: monthsLabels,
    datasets: [
      {
        label: 'Valor Total',
        data: fourLastMonthsTotalValues,
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(0, 255, 0)',
          'rgb(0, 0, 255)',
          'rgb(255, 0, 255)',
        ],
        hoverOffset: 4,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total de Vendas mensais (últimos 4 meses)'
      }
    }
  },
};

const chart = new Chart(chartContext, chartConfig);

function getMonthName(month) {
  switch (month) {
    case 0:
      return 'Janeiro';  
    case 1:
      return 'Fevereiro';
    case 2:
      return 'Março';
    case 3:
      return 'Abril';  
    case 4:
      return 'Maio';
    case 5:
      return 'Junho';
    case 6:
      return 'Julho';
    case 7:
      return 'Agosto';
    case 8:
      return 'Setembro';
    case 9:
      return 'Outubro';
    case 10:
      return 'Novembro';
    case 11:
      return 'Dezembro';
    default:
      return;
  }
}