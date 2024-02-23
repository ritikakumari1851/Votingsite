import React, { useState } from "react";
import Axios from "axios";
import Delete from "../components/Delete";
import { Link } from "react-router-dom";

const Editcandidate = () => {
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

  const handleDelete = async (candidateId) => {
    try {
      // Delete candidate with the given ID
      await Axios.delete(
        `https://voteonclickbackend.onrender.com/candidate/${candidateId}`
      );
      // Filter out the deleted candidate from the state
      const updatedCandidates = candidates.filter(
        (candidate) => candidate._id !== candidateId
      );
      setCandidates(updatedCandidates);
    } catch (error) {
      console.error("Error deleting candidate:", error.message);
    }
  };

  return (
    <div>
      <button className=" bg-gray-900 rounded-full p-2 float-right mr-4 px-4 text-white">
        <Link to={"/dashboard"}> Dashboard</Link>
      </button>
      <form onSubmit={handleSubmit} className="mt-5 ml-2">
        <div className="flex flex-col">
          <div className="">
            <input
              type="text"
              value={BallotId}
              onChange={handleInputChange}
              placeholder="Enter Ballot ID:"
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
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              padding: 0,
            }}
          >
            {candidates.map((candidate) => (
              <li key={candidate._id} style={{ margin: "0 10px 10px 0" }}>
                <div
                  className="bg-purple-300 p-4"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <b className="text-lg">Full Name:</b>
                  <span style={{ marginLeft: "5px" }}>
                    {candidate.full_name}
                  </span>
                  <b style={{ marginLeft: "10px" }}>Name:</b>
                  <span style={{ marginLeft: "5px" }}>{candidate.Name}</span>
                  &nbsp;&nbsp;
                  <b style={{ marginLeft: "10px" }}>Email:</b>
                  <span style={{ marginLeft: "5px" }}>{candidate.email}</span>
                  &nbsp;&nbsp;
                  <b style={{ marginLeft: "10px" }}>Position:</b>
                  <span style={{ marginLeft: "5px" }}>
                    {candidate.position}
                  </span>
                  &nbsp;
                  <b style={{ marginLeft: "10px" }}>About:</b>
                  <span style={{ marginLeft: "5px" }}>{candidate.about}</span>
                  &nbsp;&nbsp;
                  <b style={{ marginLeft: "10px" }}>DOB:</b>
                  <span style={{ marginLeft: "5px" }}>
                    {new Date(candidate.dob).toLocaleDateString()}
                  </span>
                  &nbsp;&nbsp;
                  <b style={{ marginLeft: "10px" }}>Message:</b>
                  <span style={{ marginLeft: "5px" }}>{candidate.message}</span>
                  &nbsp;&nbsp;
                  <b style={{ marginLeft: "10px" }}>BallotID:</b>
                  <span style={{ marginLeft: "5px" }}>
                    {candidate.BallotId} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  </span>
                  <button
                    onClick={() => handleDelete(candidate._id)}
                    class="flex justify-center items-center gap-2 w-16 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                  >
                    <svg viewBox="0 0 15 15" class="w-5 fill-white">
                      <svg
                        class="w-6 h-6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      Button
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className=" rounded-full bg-slate-900 p-4 px-8 text-white flex ml-[100vh] mt-10">
        <Link to="/Ballotbox"> Add Candidates</Link>
      </button>
    </div>
  );
};
export default Editcandidate;
