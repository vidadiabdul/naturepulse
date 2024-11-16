import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ chartData, maxY }) => {
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

  return <Line data={chartData} options={options} />;
};