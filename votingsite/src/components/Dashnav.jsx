import React from "react";
import img from "../assets/stock-vector-vote-icon-comic-style-ballot-box-cartoon-vector-illustration-white.jpeg";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import img1 from "../assets/voting-box.png";
import img2 from "../assets/price-tag.png";
import img6 from "../assets/vote.png";
import img3 from "../assets/speedometer.png";
import img4 from "../assets/logout.png";
import img5 from "../assets/user.png";

export default function Dashnav() {
  function logout() {
    localStorage.removeItem("userToken");
    alert("Logged out Successfully");
  }
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col bg-gray-800 py-5 h-full text-xl text-gray-400 w-[32vh] shadow-2xl">
        <div className="flex flex-row items-center mb-4 pl-4 border-b pb-2 border-gray-400">
          <p className="font-display font-bold hover:text-white">
            <b className=" text-3xl text-black">V</b>ote{" "}
            <b className=" text-3xl text-black">O</b>nclick
          </p>
        </div>
        <div className="flex flex-col">
          <div className="pb-28">
            <div className="flex flex-col font-serif">
              <p className="pt-4 pb-4 hover:bg-blue-950 hover:text-white text-lg">
                <Link to={"/dashboard"} className="flex items-center">
                  <img src={img3} alt="" className="w-8 h-8 mr-2 ml-2" />
                  Dashboard
                </Link>
              </p>
              <p className="pb-4 pt-4 hover:bg-blue-950 hover:text-white">
                <Link to={"/Ballot"} className="flex items-center">
                  <img src={img6} alt="" className="w-8 h-8 mr-2 ml-2" />
                  Ballot
                </Link>
              </p>
              <p className=" pt-4 pb-4 hover:bg-blue-950 hover:text-white">
                <Link to={"/voiting"} className="flex items-center">
                  <img src={img1} alt="" className="w-8 h-8 mr-2 ml-2" />
                  Voting
                </Link>
              </p>
              <p className=" pt-4 pb-4 hover:bg-blue-950 hover:text-white">
                <Link to={"/pricing"} className="flex items-center">
                  <img src={img2} alt="" className="w-8 h-8 mr-2 ml-2" />
                  Pricing
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center pr-8 mt-12 gap-4">
            <p className=" hover:text-white text-md">
              <Link to={"/profile"} className="flex items-center mt-10">
                <img src={img5} alt="" className="w-8 h-8 mr-2" />
                Edit profile
              </Link>
            </p>
            <button onClick={logout} className="hover:text-white text-md ">
              <Link to={"/Login"} className="flex items-center">
                <img src={img4} alt="" className="w-8 h-8 mr-2" />
                Logout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
