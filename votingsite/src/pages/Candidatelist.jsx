import React, { useState } from "react";
import Axios from "axios";

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
      // Fetch candidates based on the entered ballot ID
      const response = await Axios.get(
        `https://voteonclickbackend.onrender.com/candidate?BallotId=${ballotId}`
      );
      console.log("Response:", response.data);
      setCandidates(response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" mt-5 ml-2">
        <div className=" flex flex-col">
          <div className="">
            <input
              type="text"
              value={ballotId}
              onChange={handleInputChange}
              placeholder=" Enter Ballot ID:"
            />
          </div>
          <div className="ml-[10vh] mt-2">
            <button type="submit" className=" bg-green-800 p-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
      {candidates.length > 0 && (
        <div>
          <h2>Candidate List</h2>
          <ul>
            {candidates.map((candidate) => (
              <li key={candidate._id}>
                {candidate.full_Name} - {candidate.email} - {candidate.position}{" "}
                - {candidate.about} - {candidate.dob} -{candidate.message} -{" "}
                {candidate.BallotId}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Candidatelist;
