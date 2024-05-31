import React from "react";
// import sales from "../../../assets/sales.png";
import sales1 from "../../../assets/Sales.png";
import revenue from "../../../assets/Revenue.png";
import profit from "../../../assets/Profit.png";
import cost from "../../../assets/Cost.png";
import purchase from "../../../assets/Purchase.png";
import Quantityinhand from "../../../assets/Quantity.png";
import Ontheway from "../../../assets/On the way.png";
import Suppliers from "../../../assets/Suppliers.png";
import Categories from "../../../assets/Categories.png";
import cancel from "../../../assets/Cancel.png";
import returnn from "../../../assets/Profit.png";
import SalesChart from "./SalesChart";
import OrderSummaryChart from "./OrderSummaryChart";
import TopSellingStock from "./TopSellingStock";
import LowQuantityStock from "./LowQuantityStock";

const DashboardHome = () => {
  return (
    <>
      <div className="flex flex-wrap">
      <div className="lg:w-8/12 mx-3 w-full mb-3 max-h-96 rounded-lg bg-white">
  <h1 className="text font-medium text-left mb-1 mx-2">Sales Overview</h1>

  <div className="flex flex-col sm:flex-row items-center">
    <div className="flex flex-col sm:w-1/2 pt-2 pb-2 items-center">
      <div className="flex pr-1 bg-blue-200">
        <img src={sales1} alt="sales" className="w-5 h-5"></img>
      </div>
      <div className="flex flex-row pt-2 justify-evenly">
        <h1 className="pr-3 text font-semibold">$ 832</h1>
        <p className="text pr-2 font-medium text-grey500">Sales</p>
      </div>
    </div>
    <div className="flex flex-col sm:w-1/2 pt-2 pb-2 items-center">
      <div className="flex pr-1">
        <img src={revenue} alt="revenue" className="w-5 h-5"></img>
      </div>
      <div className="flex flex-row pt-2 justify-evenly">
        <h1 className="pr-3 text font-semibold">$ 18,300</h1>
        <p className="text font-medium text-grey500">Revenue</p>
      </div>
    </div>
    <div className="flex flex-col sm:w-1/2 pt-2 pb-2 items-center">
      <div className="flex pr-1">
        <img src={profit} alt="profit" className="w-5 h-5"></img>
      </div>
      <div className="flex flex-row pt-2 justify-evenly">
        <h1 className="pr-3 text font-semibold">$ 868</h1>
        <p className="text font-medium text-grey500">Profit</p>
      </div>
    </div>
    <div className="flex flex-col sm:w-1/2 pt-2 pb-2 items-center">
      <div className="flex pr-1">
        <img src={cost} alt="cost" className="w-5 h-5"></img>
      </div>
      <div className="flex flex-row pt-2 justify-evenly">
        <h1 className="pr-3 text font-semibold">$ 17,432</h1>
        <p className="text font-medium text-grey500">Cost</p>
      </div>
    </div>
  </div>
</div>

        <div className="lg:w-3/12 mx-3 mb-3 w-full max-h-28 rounded-lg  bg-white">
          <h1 className="text font-medium text-left mb-1 mx-2">
            Inventary Summary
          </h1>

          <div className="flex flex-wrap lg:flex-row md:flex-row mx-2 sm:flex-col items-center">
            <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full pt-2 pb-2 items-center">
              <div className="flex pr-1">
                <img src={Quantityinhand} alt="Quantityinhand" className="w-5 h-5"></img>
              </div>
              <div className="flex flex-col pt-2 justify-evenly">
                <h1 className="pr-3 text font-semibold">868</h1>
                <p className="text-xs text-black font-medium">
                  Quantity in hands
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full pt-2 pb-2 items-center">
              <div className="flex pr-1">
                <img src={Ontheway} alt="Ontheway" className="w-5 h-5"></img>
              </div>
              <div className="flex flex-col pt-2 justify-evenly">
                <h1 className="pr-3 text font-semibold">200</h1>
                <p className="text-xs text-black font-medium">To be Received</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*New*/}
      <div className="flex flex-wrap">
      <div className="lg:w-8/12 mx-3 w-full mb-3 max-h-96 rounded-lg bg-white">
          <h1 className="text font-medium text-left mb-1 mx-2">
            Purchase Overview
          </h1>

          <div className="flex flex-col  sm:flex-row items-center">
            <div className="flex flex-col lg:w-1/4 sm:w-full pt-2 pb-2 items-center">
              <div className="flex pr-1">
                <img src={purchase} alt="purchase" className="w-5 h-5"></img>
              </div>
              <div className="flex flex-row pt-2 justify-evenly">
                <h1 className="pr-3 text font-semibold">$ 82</h1>
                <p className="text pr-2 font-medium text-grey500">
                  Purchase
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/4 sm:w-full pt-2 pb-2 items-center">
              <div className="flex pr-1">
                <img src={cost} alt="cost" className="w-5 h-5"></img>
              </div>
              <div className="flex flex-row pt-2 justify-evenly">
                <h1 className="pr-3 text font-semibold">$ 13,573</h1>
                <p className="text font-medium text-grey500">Cost</p>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/4 sm:w-full pt-2 pb-2 items-center">
              <div className="flex pr-1">
                <img src={cancel} alt="cancel" className="w-5 h-5"></img>
              </div>
              <div className="flex flex-row pt-2 justify-evenly">
                <h1 className="pr-3 text font-semibold">$ 5</h1>
                <p className="text font-medium text-grey500">Cancel</p>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/4 sm:w-full pt-2 pb-2 items-center">
              <div className="flex pr-1">
                <img src={returnn} alt="return" className="w-5 h-5"></img>
              </div>
              <div className="flex flex-row pt-2 justify-evenly">
                <h1 className="pr-3 text font-semibold">$ 17,432</h1>
                <p className="text font-medium text-grey500">Return</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 mx-3 mb-3 w-full max-h-28 rounded-lg bg-white">
          <h1 className="text font-medium text-left mb-1 mx-2">
            Product Summary
          </h1>

          <div className="flex flex-wrap lg:flex-row md:flex-row mx-2 sm:flex-col items-center">
            <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full pt-2 pb-2 items-center">
              <div className="flex pr-1">
                <img src={Suppliers} alt="Suppliers" className="w-5 h-5"></img>
              </div>
              <div className="flex flex-col pt-2 justify-evenly">
                <h1 className="pr-3 text font-semibold">31</h1>
                <p className="text-xs text-black font-medium">
                  Number of Suppliers
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full pt-2 pb-2 items-center">
              <div className="flex pr-1">
                <img src={Categories} alt="Categories" className="w-5 h-5"></img>
              </div>
              <div className="flex flex-col pt-2 justify-evenly">
                <h1 className="pr-3 text font-semibold">21</h1>
                <p className="text-xs font-medium text-black">
                  Number of Categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="lg:w-8/12 mx-3 sm:w-full md:w-1/2">
          <SalesChart />
        </div>

        <div className="lg:w-3/12 mx-3 sm:w-full md:w-1/2 lg:w-1/3">
          <OrderSummaryChart />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="lg:w-8/12 mx-3 my-3 sm:w-full md:w-1/2 ">
          <div className="mb-2">
            <TopSellingStock />
          </div>
        </div>
        <div className="lg:w-3/12 mx-3 my-3 sm:w-full md:w-1/2">
          <div className="mb-2">
            <LowQuantityStock />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
