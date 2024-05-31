import React from "react";
import { Link } from "react-router-dom";

const TopSellingStock = () => {
  // Sample data for top selling stocks
  const stocks = [
    {
      name: "T-Shirt 1",
      soldQuantity: 30,
      remainingQuantity: 12,
      price: "$100",
    },
    { name: "T-Shirt 2", soldQuantity: 21, remainingQuantity: 15, price: "$207" },
    { name: "T-Shirt 3", soldQuantity: 19, remainingQuantity: 17, price: "$105" },
  ];

  return (
    <div className="rounded-lg bg-white py-2 my-2">
      <div className="flex justify-between">
        <div>
          <h1 className="text font-medium mb-4 text-start px-2">
            Top Selling Stocks
          </h1>
        </div>
        <div>
          <Link to="/" className="text-blue text-xs px-2">
            See All
          </Link>
        </div>
      </div>

      <div className="flex justify-between px-2 items-start mb-2 border-t border-gainsboro">
        <h3 className="text-sm text-gray-500 font-semibold py-px">Name</h3>
        <h3 className="text-sm text-gray-500 font-semibold py-px">Sold Quantity</h3>
        <h3 className="text-sm text-gray-500 font-semibold py-px">Remaining Quantity</h3>
        <h3 className="text-sm text-gray-500 font-semibold py-px">Price</h3>
      </div>
      {stocks.map((stock, index) => (
        <div
          className="flex justify-between items-center px-2 mb-4 border-t border-gainsboro py-2 "
          key={index}
        >
          <p className="text-sm">{stock.name}</p>
          <p className="text-sm">{stock.soldQuantity}</p>
          <p className="text-sm">{stock.remainingQuantity}</p>
          <p className="text-sm">{stock.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TopSellingStock;
