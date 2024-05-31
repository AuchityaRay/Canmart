import React from "react";

const ViewNumber = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pencil">
      <div className="max-w-md px-7 py-9 bg-white">
        <h1 className="text-2xl font-bold mb-3 text-left">View Number</h1>
        <p className="mb-3 text-lg font-medium text-left leading-6">
          Sign In to Get The Best Deals, Exclusive Offers with CanadaMart
        </p>
        <form className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              className="w-2/12 rounded-md px-3 py-2 text-black outline-none bg-input"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-10/12 rounded-md px-3 py-2 text-black outline-none bg-input"
            />
          </div>
          <div className="flex space-x-16 pb-5 pt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="option"
                className="form-radio text-orange border-black focus:darkblue"
              />
              <span className="ml-2 text-black">I want to buy</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="option"
                className="form-radio text-orange border-black focus:darkblue"
              />
              <span className="ml-2 text-black">I want to sell</span>
            </label>
          </div>
          <button className="w-full bg-darkblue text-white font-normal py-2 px-4 rounded">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ViewNumber;
