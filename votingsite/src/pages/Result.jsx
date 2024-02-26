import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Candidatelist = () => {
  const [ballotId, setBallotId] = useState("");
  const [candidates, setCandidates] = useState([]);

  const handleInputChange = (event) => {
    setBallotId(event.target.value); // Update ballotId state as user types
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form with ballotId:", ballotId);
    try {
      // Fetch candidates and total votes based on the entered ballot ID
      const response = await Axios.get(
        `https://voteonclickbackend.onrender.com/result/${ballotId}`
      );
      console.log("Response:", response.data);
      setCandidates(response.data.result);
    } catch (error) {
      console.error("Error fetching candidates:", error.message);
    }
  };

  return (
    <div>
      <button className=" bg-gray-900 rounded-full p-2 float-right mr-4 px-4 text-white">
        <Link to={"/dashboard"}> Dashboard</Link>
      </button>
      <form onSubmit={handleSubmit} className=" mt-5 ml-2">
        <div className=" flex flex-col">
          <div className="">
            <input
              type="text"
              value={ballotId}
              onChange={handleInputChange}
              placeholder=" Enter Ballot ID:"
              className=" rounded-full"
            />
          </div>
          <div className="ml-[10vh] mt-2">
            <button
              type="submit"
              className=" bg-gray-800 p-2 px-4 text-base text-gray-200 hover:bg-gray-900 rounded-full"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {candidates.length > 0 && (
        <div>
          <h2 className=" text-4xl text-center font-serif mb-10">
            Candidate List
          </h2>
          <ul>
            {candidates.map((candidate) => (
              <li key={candidate.id}>
                <div className=" bg-purple-300 mb-4 p-4">
                  <b className=" text-lg">Candidate ID:</b> {candidate.id}{" "}
                  &nbsp;&nbsp;&nbsp;<b>Name:</b> {candidate.name}{" "}
                  &nbsp;&nbsp;&nbsp;<b>Total Votes:</b> {candidate.totalVotes}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Candidatelist;
