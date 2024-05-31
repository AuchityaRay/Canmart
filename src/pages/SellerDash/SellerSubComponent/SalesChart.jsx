import React from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const options = {
    chart: {
      id: "sales-purchases",
      stacked: false,
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toLocaleString();
        },
      },
      tickAmount: 6, // Set the number of ticks on the y-axis
      min: 0, // Set the minimum value of the y-axis
      max: 60000, // Set the maximum value of the y-axis
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    stroke: {
      curve: "smooth",
    },
  };

  const series = [
    {
      name: "Purchases",
      data: [55000, 58000, 45000, 37000, 42000, 29000, 55000, 45000, 43000, 38000, 23000, 67000],
    },
    {
      name: "Sales",
      data: [50000, 48000, 52000, 43000, 46000, 41000, 50000, 42000, 42000, 43000, 34000, 78000],
    },
  ];

  return (
    <div className="rounded-lg bg-white">
      <h1 className="text text-start px-2 font-medium mb-2">
        Sales & Purchases
      </h1>
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default SalesChart;
