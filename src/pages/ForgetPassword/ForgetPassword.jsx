import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MsgBox from "../../components/MsgBox/MsgBox";
import Spinner from "../../components/Spinner/Spinner";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMailSent, setMailSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();


  return (
    <div className="contact-us flex items-center justify-center h-screen bg-whitesmoke">
      <div className="flex sm:flex-row-reverse lg:flex-row-reverse flex-col-reverse lg:w-8/12 h-5/6 bg-white shadow-md sm:w-10/12 w-full lg:scale-1 sm:scale-1 scale-90 ">
        <div className=" w-full lg:w-1/2 sm:w-1/2 h-full flex flex-col items-center justify-center ">
          <form
            className="flex flex-col items-center justify-center w-8/12"
          >
            {errorMsg && <MsgBox color={"red"} text={errorMsg} />}{" "}
            {successMsg && <MsgBox color={"green"} text={successMsg} />}
            <br />
            <span className="relative  w-full h-12 flex items-center mb-4 shadow">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="h-full w-ful rounded-md bg-input pl-4"
                type="text"
                placeholder="Enter Email"
              />
              <button
                type="button"
                onClick={() => {
                  setEmail("");
                }}
                className="scale-95 absolute right-4 border h-4 w-4
                            rounded-xl flex items-center justify-center"
              >
                <p className="mb-1 mt-px">x</p>
              </button>
            </span>
            <button
              type="submit"
              className="w-full h-12 flex items-center justify-center bg-button text-white rounded-md mt-3"
            >
              {loading ? <Spinner /> : "Reset Password"}
            </button>
          </form>
          {isMailSent && (
            <div>
              <Link to={"/login"}>Go Back To Login</Link>
            </div>
          )}{" "}
          {errorMsg && (
            <div>
              <Link to={"/login"}>Go Back To Login</Link>
            </div>
          )}
        </div>
        <div className="text-left w-full sm:w-1/2 lg:w-1/2 bg-pink flex flex-col justify-center items-center sm:h-full lg:h-full h-20">
          <p className="text-4xl font-bold">Forget Password?</p>
          <span className="text-xl mt-5 ml-3 sm:flex hidden">
            No worries we'll send you the reset <br />
            instruction in you email
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
