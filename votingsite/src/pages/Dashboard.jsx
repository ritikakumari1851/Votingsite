import React from "react";
import Dropdown from "../components/Dropdown";
import Dashnav from "../components/Dashnav";
import img1 from "../assets/vote.png";
import Card1 from "../components/Card1";
import img2 from "../assets/checklist.png";
import img3 from "../assets/cv (2).png";
import img4 from "../assets/politics.png";
import img5 from "../assets/voter.png";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="">
      <div className=" border-b">
        <div className=" bg-gray-800 flex flex-row justify-between items-center ">
          <p className=" text-gray-300 font-serif text-lg font-semibold ml-4">
            Dashboard
          </p>
          <div className=" ">
            <Dropdown />
          </div>
        </div>
      </div>

      <div className=" flex">
        <div className="">
          <Dashnav />
        </div>

        <div className=" mt-1">
          <div className=" flex flex-row gap-2">
            <button className=" px-10 py-2 mb-16 bg-cyan-200 ml-1 ">
              <img src={img2} className=" size-1/2 ml-14" />
              <Link to={"/Candidatelist"}>Candidates</Link>
            </button>

            <Link to={"/Ballotbox"}>
              <button className=" px-20 py-16 mb-16 bg-orange-300">
                {" "}
                <img src={img3} />
                Ballot{""}
              </button>
            </Link>
            <Link to={"/Voterlist"}>
              <button className=" px-20 py-16 mb-16 bg-green-200">
                {" "}
                <img src={img4} />
                Voters{""}
              </button>
            </Link>
            <Link to={"/Result"}>
              <button className=" px-20 py-16 mb-10 bg-gray-300">
                {" "}
                <img src={img5} />
                Results{""}
              </button>
            </Link>
          </div>
          <div className="">
            <p className=" text-center font-serif text-4xl text-gray-900 mb-12 mt-[-20px]">
              Analysis
            </p>
          </div>
          <div className=" bg-gray-400 w-full h-[30vh] flex justify-between mx-10 shadow-xl ">
            <div>
              <p>
              hello</p>
              <img src={img1}/>
              </div>
              <div>
              <p>
              hello</p>
              <img src={img1}/>
              </div>
            <div>
              <p>
              hello</p>
              <img src={img1}/>
              </div>
            <div>
              <p>
              hello</p>
              <img src={img1}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
