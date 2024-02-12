import React, { useState, useEffect } from "react";
import Axios from "axios";

const Candidatelist = () => {
  const [ballotId, setBallotId] = useState("");
  const [candidates, setCandidates] = useState([]);

  const handleInputChange = (event) => {
    setBallotId(event.target.value); // Update ballotId state as user types
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch candidates based on the entered ballot ID
      const response = await Axios.get(`https://voteonclickbackend.onrender.com/candidate?BallotId=${ballotId}`);
      setCandidates(response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error.message);
    }
  };

  useEffect(() => {
    // Fetch candidates only when ballotId changes and it's not empty
    if (ballotId) {
      handleSubmit();
    }
  }, [ballotId]); // Execute useEffect whenever ballotId changes

  return (
    <div>
      <h2>Enter Ballot ID</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ballotId} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <h2>Candidate List</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id}>
            {candidate.full_Name} - {candidate.email} - {candidate.position} - {candidate.about} - {candidate.dob} -{candidate.message} - {candidate.BallotId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Candidatelist;
