import React from "react";
import Dropdown from "../components/Dropdown";
import Dashnav from "../components/Dashnav";
import img1 from "../assets/vote.png";
import Card1 from "../components/Card1";
import img2 from "../assets/checklist.png";
import img3 from "../assets/cv (2).png";
import img4 from "../assets/politics.png";
import img5 from "../assets/voter.png";
export default function Dashboard() {
  return (
    <div className="">
      <div>
        <div className=" bg-gray-600 flex flex-row justify-between items-center ">
          <p className=" text-white ml-4">Dashboard</p>
          <div className="">
            <Dropdown />
          </div>
        </div>
      </div>

      <div className=" flex">
        <div className="">
          <Dashnav />
        </div>

        <div className=" mt-2">
          <div className=" flex flex-row gap-2">
            <button className=" px-20 py-16 bg-cyan-900 ml-2">
              <img src={img2} />
              Candidates{" "}
            </button>
            <button className=" px-20 py-16 bg-orange-300">
              {" "}
              <img src={img3} />
              Ballot{""}
            </button>
            <button className=" px-20 py-16 bg-green-400">
              {" "}
              <img src={img4} />
              Voters{""}
            </button>
            <button className=" px-20 py-16 bg-gray-600">
              {" "}
              <img src={img5} />
              Results{""}
            </button>
          </div>
          <p className=" text-center font-serif text-4xl mt-10 text-black">
            Our most recent Candidate
          </p>
          <div className=" flex flex-row justify-between mt-10 mx-20">
            <Card1 />
            <Card1 />
            <Card1 />
          </div>
        </div>
      </div>
    </div>
  );
}
