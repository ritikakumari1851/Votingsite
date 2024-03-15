import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Candidatelist = () => {
  const [BallotId, setBallotId] = useState("");
  const [candidates, setCandidates] = useState([]);

  const handleInputChange = (event) => {
    setBallotId(event.target.value); // Update ballotId state as user types
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form with ballotId:", BallotId);
    try {
      // Fetch candidates based on the entered ballot ID
      const response = await Axios.get(
        `https://voteonclickbackend.onrender.com/candidate?BallotId=${BallotId}`
      );
      console.log("Response:", response.data);
      setCandidates(response.data);
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
              value={BallotId}
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
              <li key={candidate._id}>
                <div className=" bg-purple-300 mb-4 p-4">
                  <b className=" text-lg">Full_Name :</b> {candidate.full_name}{" "}
                  &nbsp;&nbsp;&nbsp;<b> Name:</b> {candidate.Name}{" "}
                  &nbsp;&nbsp;&nbsp; <b> Email</b> {candidate.email}{" "}
                  &nbsp;&nbsp;&nbsp;<b> Position:</b> {candidate.position}{" "}
                  &nbsp;&nbsp;&nbsp;<b> About:</b> {candidate.about}{" "}
                  &nbsp;&nbsp;&nbsp;
                  <b>
                  DOB:{new Date(candidate.dob).toLocaleDateString()}</b><b> Message:</b>{" "}
                  {candidate.message}
                  <b> &nbsp;&nbsp;&nbsp; BallotID:</b> {candidate.BallotId}
                </div>
              </li>
            ))}
          </ul>

          <button class=" ml-[100vh] mt-10 w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            <Link to={"/Editcandidate"}> Edit Candidate</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Candidatelist;
