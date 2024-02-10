import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashnav from "../components/Dashnav";
import img1 from "../assets/hand-holding-ballot-paper-voting-600nw-2367185457.webp";
import img2 from "../assets/hand-voting-ballot-box-icon-260nw-2277558977.webp";
import img3 from "../assets/AdobeStock_385320928-Converted.png";
import img4 from "../assets/checklist.png";
import img5 from "../assets/cv (2).png";
import img6 from "../assets/politics.png";
import img7 from "../assets/voter.png";
import Auth from "./Auth";

export default function Ballot() {
  const [ballotID, setBallotID] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setBallotID(event.target.value);
  };
  const handleCreateBallot = () => {
    // Navigate to Ballotbox page and pass the entered Ballot ID as state
  
    navigate("/Ballotbox", { state: { ballotID } });
    return <Auth ballotID={ballotID} />;
  };

  return (
    <div className="  ">
      <div>
        <p className="p-4 bg-gray-900 text-xl font-serif shadow-2xl ">
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
            <button className="px-20 py-16 bg-cyan-900 ml-2">
              <img src={img4} /> See Ballot
            </button>
            <button className="px-20 py-16 bg-orange-300">
              <img src={img5} /> Edit Ballot
            </button>
            <button className="px-20 py-16 bg-green-400">
              <img src={img6} /> See Candidates
            </button>
            <button className="px-20 py-16 bg-gray-600">
              <img src={img7} /> Edit Candidates
            </button>
          </div>
          <div className="flex mt-[10vh] justify-between">
            <img src={img1} className="size-32" />
            <div className=" flex flex-col gap-2">
              <label htmlFor="">
                Voters Can access this Ballot only using This ID,{" "}
                <p>You can change the id When the Session ends</p>
              </label>
              <input
                type="text"
                placeholder=" Create Ballot ID"
                value={ballotID}
                onChange={handleInputChange}
              />
               <button
                className="py-8 mb-2 bg-green-900 px-32 rounded-md flex text-gray-200 font-serif text-2xl items-center"
                onClick={handleCreateBallot}
              >
                
                Create new Ballot
              </button>
            </div>
            <img src={img2} className="size-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
