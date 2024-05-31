import React from "react";

const SignInCreation = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-pencil">
        <div className="max-w-md px-7 py-9 bg-white">
          <h1 className="text-2xl font-bold mb-3 text-left">View Number</h1>
          <form className="space-y-4 mt-5">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder=""
                className="w-2/12 rounded-md px-3 py-2 text-black bg-input mt-2"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-10/12 rounded-md px-3 py-2 text-black bg-input mt-2"
              />
            </div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg px-3 py-2 text-black bg-input mb-4"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="w-full rounded-lg px-3 py-2 text-black bg-input mb-4"
            />
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                className="form-checkbox bg-check mt-2 mb-3"
              />
              <span className="text-black text-xs mb-3 mt-2">
                I agree to the terms and conditions
              </span>
            </div>
            <button className="w-full bg-darkblue text-white font-normal py-2 px-4  rounded">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInCreation;
