import React from "react";
import Img1 from "../../../assets/tshirt1.png";
import Img2 from "../../../assets/tshirt2.png";
import Img3 from "../../../assets/tshirt3.png";
import { Link } from "react-router-dom";

const LowQuantityStock = () => {
  // Sample data for low quantity stocks
  const stocks = [
    {
      image: Img1,
      name: "T-Shirt 1",
      remQuantity:10,
    },
    {
      image: Img2,
      name: "T-Shirt 2",
      remQuantity:15,
    },
    {
      image: Img3,
      name: "T-Shirt 3",
      remQuantity:15,
    },
  ];

  return (
    <div className="rounded-lg bg-white">
      <div className="flex justify-between">
        <div>
          <h2 className="text font-medium mb-4 text-start px-2">
            Low Quantity Stocks
          </h2>
        </div>
        <div>
          <Link to="/" className="text-blue text-xs px-2">
            See All
          </Link>
        </div>
      </div>
      {stocks.map((stock, index) => (
        <div
          className="flex justify-between items-center px-2 mb-4"
          key={index}
        >
          <img src={stock.image} alt="Product" className="w-12 h-12 mr-4" />
          <div>
          <h3 className="text-left">{stock.name}</h3>
          <p>Remaining Quantity  : {stock.remQuantity}</p>
          </div>
          <button className="bg-orange text-black text-xs rounded">Low</button>
        </div>
      ))}
    </div>
  );
};

export default LowQuantityStock;
