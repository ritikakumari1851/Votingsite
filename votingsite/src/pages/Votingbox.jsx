import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Votingbox = () => {
  const [candidates, setCandidates] = useState([]);
  const { ballotId } = useParams(); // Get ballotId from URL params

  useEffect(() => {
    const fetchCandidates = async () => {
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

    fetchCandidates(); // Call the fetchCandidates function when the component mounts
  }, [ballotId]); // Add ballotId to dependency array to fetch candidates when it changes

  return (
    <div className="bg-blue-200">
      <h2 className="text-4xl font-serif text-center text-blue-800 mb-5">
        Ballot ID: {ballotId}
      </h2>
      <h2 className="text-4xl font-serif text-center text-blue-800 mb-5">
        Welcome To the BallotBox
      </h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id} className="flex justify-between">
            <div className="flex gap-10 mb-2 mt-2 bg-green-400 p-4">
              <h3>NAME: {candidate.full_name}</h3>
              <h3>POSITION: {candidate.position}</h3>
              <h3>ABOUT: {candidate.about}</h3>
              <h3>DOB: {candidate.dob}</h3>
              <h3>MESSAGE: {candidate.message}</h3>
              <h3>Candidate_id: {candidate._id}</h3>
              <button>VOTE</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Votingbox;
