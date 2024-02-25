"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import data from "../src/data/testData.json";

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              boxWidth: 4,
            },
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Latency [s]",
              font: {
                size: 18,
              },
            },
          },
          x: {
            title: {
              display: true,
              text: "QPS",
              font: {
                size: 18,
              },
            },
          },
        },
      },
    });

    // Cleanup function to destroy chart instance on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
