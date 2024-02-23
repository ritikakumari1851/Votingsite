import React from "react";
import Dashnav from "../components/Dashnav";
import img from "../assets/logo.jpg";
import img2 from "../assets/checklist.png";
import img3 from "../assets/cv (2).png";
import img4 from "../assets/politics.png";
import img5 from "../assets/voter.png";
import { Link } from "react-router-dom";
export default function Voiting() {
  return (
    <div>
      <div className=" text-black font-serif text-xl">
        <div>
          <p className="p-4 bg-gray-800 text-xl font-serif shadow-2xl text-white">
            Voting
          </p>
        </div>
        <div className=" flex items-center gap-4">
          <div>
            <Dashnav />
          </div>

          <div className="">
            <p>No. of Candidates</p>
            <button className=" px-28 py-8 bg-cyan-900">
              <img src={img2} className=" w-10 h-10" />
              <Link to={"/Candidatelist"}>Candidates</Link>
            </button>
            <p>
              {" "}
              <Link to={"/Voterslist"}>No. of Voters</Link>
            </p>
            <button className=" px-32 py-8 bg-orange-300">
              <img src={img3} className=" w-10 h-10" />
              <Link to={"/Voterslist"}> Voters</Link>
            </button>
            <p>
              {" "}
              <Link to={"/Result"}>Analyse Result</Link>
            </p>
            <button className=" px-32 py-8 bg-green-400">
              <img src={img4} className=" w-10 h-10" /> Results
            </button>
            <p>
              {" "}
              <Link to={"/Editvoter"}>Edit voters</Link>
            </p>
            <button className=" px-36 py-8 bg-gray-600">
              <img src={img5} className=" w-10 h-10" />
              <Link to={"/Editvoter"}> Edit</Link>
            </button>
          </div>
          <div className=" flex flex-col">
            <img src={img} className=" ml-20 size-2/3" />
            <p className=" text-4xl font-serif ml-32 text-orange-400">
              Voting Begins here!
            </p>
            <p className=" text-2xl font-sans ml-40 mt-10">
              Grab Your Ballot Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
