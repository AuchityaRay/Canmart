import React from "react";
import Chart from "react-apexcharts";

const OrderSummaryChart = () => {
  // Sample data for order summary
  const options = {
    chart: {
      id: "order-summary",
      width: "100%",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    },
    yaxis: {},
    stroke: {
      curve: "smooth",
    },
  };

  const series = [
    {
      name: "Ordered",
      data: [30, 40, 35, 50, 49, 60],
    },
    {
      name: "Delivered",
      data: [20, 25, 30, 28, 35, 40],
    },
  ];

  return (
    <div className="rounded-lg bg-white">
      <h1 className="text font-medium px-2 text-start mb-2">
            Order Summary
          </h1>
      <Chart options={options} series={series} type="line" height={200} />
    </div>
  );
};

export default OrderSummaryChart;
