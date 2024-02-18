import React, { useState } from "react";
import Axios from "axios";
import Delete from "../components/Delete";

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
      await Axios.delete(`https://voteonclickbackend.onrender.com/candidate/${candidateId}`);
      // Filter out the deleted candidate from the state
      const updatedCandidates = candidates.filter(candidate => candidate._id !== candidateId);
      setCandidates(updatedCandidates);
    } catch (error) {
      console.error("Error deleting candidate:", error.message);
    }
  };

  return (
    <div>
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
                  <Delete onClick={() => handleDelete(candidate._id)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Editcandidate;
