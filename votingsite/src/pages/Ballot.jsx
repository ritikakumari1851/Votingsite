import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashnav from "../components/Dashnav";
import img1 from "../assets/hand-holding-ballot-paper-voting-600nw-2367185457.webp";
import img2 from "../assets/hand-voting-ballot-box-icon-260nw-2277558977.webp";
import img3 from "../assets/AdobeStock_385320928-Converted.png";
import img4 from "../assets/checklist.png";
import img5 from "../assets/cv (2).png";
import img6 from "../assets/politics.png";
import img7 from "../assets/voter.png";

export default function Ballot() {
  return (
    <div className="  ">
      <div>
        <p className="p-4 bg-gray-800 text-xl font-serif shadow-2xl border-b text-white  ">
          {" "}
          Ballot
        </p>
      </div>
      <div className=" flex">
        <div>
          <Dashnav />
        </div>
        <div className=" text-xl  font-serif">
          <img src={img3} className=" w-full h-40 mb-3" />

          <div className="flex flex-row gap-2">
            <button className="px-20 py-16 bg-purple-300 ml-2">
              <img src={img4} /> See Ballot
            </button>
            <button className="px-20 py-16 bg-purple-500">
              <img src={img5} /> Edit Ballot
            </button>
            <button className="px-20 py-16 bg-purple-700">
              <img src={img6} /> See Candidates
            </button>
            <button className="px-20 py-16 bg-purple-200">
              <img src={img7} /> Edit Candidates
            </button>
          </div>
          <div className="flex mt-[10vh] justify-between">
            <img src={img1} className="size-32" />
            <div className=" flex flex-col gap-2 ">
              <button class=" w-80 h-20 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out ">
                <span class=" font-medium text-[#333] group-hover:text-white text-nowrap">
                  <Link to={"/ballotbox"}>Create new Ballot</Link>
                </span>
              </button>
            </div>
            <img src={img2} className="size-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
