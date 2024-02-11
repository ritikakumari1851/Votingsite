import React, { useState, useEffect } from "react";
import Axios from "axios";
const Candidatelist = () => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    Axios.get("https://voteonclickbackend.onrender.com/candidate")
      .then((response) => {
        setCandidates(response.data);
      })
      .catch(() => {
        console.log("Error fetching candidates");
      });
  }, []);
  return (
    <div>
      <h2>Candidate List</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id}>
            {candidate.full_name} - {candidate.email} - {candidate.position} - {candidate.about} - {candidate.dob} -{candidate.message}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Candidatelist;

