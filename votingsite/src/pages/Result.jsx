import React, { useState, useEffect } from "react";
import Axios from "axios";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [ballotId, setBallotId] = useState("");

  const fetchCandidatesWithTotalVotes = async () => {
    try {
      const response = await Axios.get(`/candidates-with-total-votes?BallotId=${ballotId}`);
      console.log("Response:", response.data);
      setCandidates(response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error.message);
    }
  };

  useEffect(() => {
    if (ballotId) {
      fetchCandidatesWithTotalVotes();
    }
  }, [ballotId]);

  const handleInputChange = (e) => {
    setBallotId(e.target.value);
  };

  return (
    <div>
      <h1>Candidates with Total Votes</h1>
      <div>
        <label htmlFor="ballotId">Enter Ballot ID: </label>
        <input
          type="text"
          id="ballotId"
          value={ballotId}
          onChange={handleInputChange}
        />
        <button onClick={fetchCandidatesWithTotalVotes}>Get Result</button>
      </div>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id}>
            <h3>Name: {candidate.full_name}</h3>
            <p>Position: {candidate.position}</p>
            <p>About: {candidate.about}</p>
            <p>Total Votes: {candidate.totalVotes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;