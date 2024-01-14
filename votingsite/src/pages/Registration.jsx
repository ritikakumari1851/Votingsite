import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div>
      <div className=" flex flex-row justify-center font-serif items-center ">
        {/* <div className=" flex items-center w-full"> */}
          {/* <img
            className=" w-screen"
            src="..\src\assets\At the office-pana.png"
            alt=""
          /> */}
        {/* </div> */}
        <form action="" className=" min-h-dvh">
          <div className=" border m-16 p-6 rounded-lg shadow-2xl mt-20 flex flex-col items-center ">
            <img
              src="..\src\assets\vote.png"
              alt=""
              className=" size-40 "
            />

            <p className=" text-center font-serif text-2xl mb-4 -mt-6 text-gray-400">
              <i>Get Strated</i>
            </p>
            <div className=" flex flex-col ">
              <div className=" flex flex-row justify-between">
                <input
                  type="text"
                  placeholder="First Name"
                  className=" p-2 mt-6 border-b border-0 border-r"
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" p-2 border-b border-0 mt-6"
                  required
                ></input>
              </div>
              <input
                type="Email"
                placeholder="Email"
                className=" p-2 mt- border-b border-0 pt-6"
                required
              ></input>
              <input
                type="number"
                placeholder="Phone no"
                className=" p-2 mt- border-b border-0 pt-6"
                required
              ></input>
              <p className=" pt-4 text-right text-slate-500" required>
                {" "}
                D.O.B
              </p>
              <input
                type="Date"
                placeholder="D.O.B"
                className=" border-2 p-2 mt-2 text-slate-700"
                required
              ></input>
              <input
                type="number"
                placeholder="Adhar-no"
                className=" p-2 mt- border-b border-0 pt-6"
              ></input>
              <input
                type="Password"
                className=" mt-8  p-2 mb- border-b border-0 pt-6"
                placeholder="Password"
                required
              ></input>
              <input
                type="Password"
                className=" p-2 mb- border-b border-0 pt-8"
                placeholder="Conform password"
                required
              ></input>
            </div>
            <div className=" flex flex-row gap-2 ml-2 text-gray-600 font-serif text-sm p-6">
              {" "}
              <input type="checkbox" className=""></input>
              <p>
                <b>I agree to the Terms and conditions</b>
              </p>
            </div>
            <button
              type="submit"
              className="text-gray-300 w-full bg-green-900 p-2 mt-4 border-b border-0 pt-5 rounded-lg hover:bg-green-950">
              Submit
            </button>
            <div className="  text-center mt-6">
              <p>
                Already have a Account?{" "}
                <Link to="/registration">
                  <u className=" text-blue-900"> Login </u>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
