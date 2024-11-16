import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

export const DonutChart = ({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: false,
    },
  };

  return <Doughnut data={chartData} options={options} />;
};
