import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ chartData, maxY }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: false,
      title: false,
    },
    scales: {
      y: {
        display: false,
        max: maxY,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};
