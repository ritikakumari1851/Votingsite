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
      <button className="bg-gray-900 rounded-full p-2 float-right mr-4 px-4 text-white">
        <Link to={"/dashboard"}> Dashboard</Link>
      </button>
      <form onSubmit={handleSubmit} className="mt-5 ml-2">
        <div className="flex flex-col">
          <div className="">
            <input
              type="text"
              value={BallotId}
              onChange={handleInputChange}
              placeholder=" Enter Ballot ID:"
              className="rounded-full"
            />
          </div>
          <div className="ml-[10vh] mt-2">
            <button
              type="submit"
              className="bg-gray-800 p-2 px-4 text-base text-gray-200 hover:bg-gray-900 rounded-full"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {candidates.length > 0 && (
        <div>
          <h2 className="text-4xl text-center font-serif mb-10">
            Candidate List
          </h2>
          <table className="table-auto mx-auto">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>About</th>
                <th>DOB</th>
                <th>Message</th>
                <th>Ballot ID</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate._id}>
                  <td>{candidate.full_name}</td>
                  <td>{candidate.Name}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.position}</td>
                  <td>{candidate.about}</td>
                  <td>{new Date(candidate.dob).toLocaleDateString()}</td>
                  <td>{candidate.message}</td>
                  <td>{candidate.BallotId}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="ml-[100vh] mt-10 w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            <Link to={"/Editcandidate"}> Edit Candidate</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Candidatelist;
