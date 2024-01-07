import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { chartData, consumerAnalysisData, customLabels } from "../../data";
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = () => {
  const [data, setData] = useState({
    labels: chartData.map((ele) => ele.day),
    datasets: [
      {
        labels: "Total Purchases",
        data: chartData.map((ele) => ele.purchaseTotal),
        pointRadius: 0,
        borderColor: "#165DFF",
      },
    ],
  });

  const options = {
    aspectRatio: false,
    scales: {
      x: {
        display: true,
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          font: {
            color: "var(--Text-3-, #86909C)",
            textAlign: "center",
            fontFamily: "Lato",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
          },
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        max: 750,
        ticks: {
          stepSize: 250,
        },
        grid: {
          color: "#E5E6EB", // Set color for horizontal grid lines
          dash: [5, 15], // Set dashed style for horizontal grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  return (
    <div className="h-full w-full">
      <Line options={options} data={data} />
    </div>
  );
};

export const HorizontalBarChart = () => {
  const [data, setData] = useState({
    labels: consumerAnalysisData.map((ele) => ele.type),
    datasets: [
      {
        label: "Data Set",
        data: consumerAnalysisData.map((ele) => ele.value),
        backgroundColor: "#4FAEE5",
        barThickness: 20,
      },
    ],
  });

  const options = {
    indexAxis: "y",
    aspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 11000,
        stepSize: 1000,
        ticks: {
          callback: function (value, index, values) {
            return value === 0 ? value : `${value / 1000}k`;
          },
          font: {
            family: "Lato",
            size: 14,
          },
        },
        grid: {
          display: true,
          stepSize: 1000,
        },
        color: "#313945",
        textAlign: "right",
        font: {
          family: "Lato",
          size: 15,
          style: "normal",
          weight: 400,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        color: "#313945",
        textAlign: "right",
        font: {
          family: "Lato",
          size: 15,
          style: "normal",
          weight: 400,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="h-full w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export const BarChart = ({ primaryColor, secColor }) => {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Transaction Amount",
        data: [800000, 600000, 400000, 200000, 500000],
        backgroundColor: primaryColor,
      },
      {
        label: "Revenue",
        data: [500000, 300000, 400000, 200000, 300000],
        backgroundColor: secColor,
      },
    ],
  };

  const options = {
    aspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return (value / 1000).toString() + "K";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyColor: "#ffffff",
        bodyFont: {
          size: 12,
        },
        borderColor: "orange",
        borderWidth: 2,
        cornerRadius: 4,
        displayColors: false,
        callbacks: {
          title: function (tooltipItems) {
            return customLabels[tooltipItems[0].dataIndex].consumer;
          },
          label: function (context) {
            const labelIndex = context.dataIndex;
            const labelData = customLabels[labelIndex];
            let label =
              context.dataset.label + ": $" + context.parsed.y.toLocaleString();
            label += `\nRevenue: ${labelData.revenue}`;
            label += `\nAmount: ${labelData.amount}`;
            label += `\nConsumption: ${labelData.consumption}`;
            label += `\nStock: ${labelData.stock}`;
            label += `\nDate: ${labelData.date}`;
            return label;
          },
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return <Bar data={data} options={options} />;
};
