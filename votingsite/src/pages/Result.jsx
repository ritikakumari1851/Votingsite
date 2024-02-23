import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Result = () => {
  const [ballotId, setBallotId] = useState(""); // State to store the user input Ballot ID
  const [candidates, setCandidates] = useState([]);
  const { BallotId } = useParams(); // Get ballotId from URL params

  useEffect(() => {
    if (BallotId) {
      setBallotId(BallotId); // Set the Ballot ID if it's present in the URL params
      fetchCandidates(BallotId); // Fetch candidates when the component mounts
    }
  }, [BallotId]);

  const fetchCandidates = async (ballotId) => {
    try {
      // Fetch candidates based on the entered ballot ID
      const response = await Axios.get(
        `https://voteonclickbackend.onrender.com/candidates-with-votes?BallotId=${ballotId}`
      );
      console.log("Response:", response.data);
      setCandidates(response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error.message);
    }
  };

  return (
    <div className="bg-blue-200">
      <h2 className="text-4xl font-serif text-center text-blue-950 mb-5 pt-10">
        Ballot ID: {ballotId}
      </h2>
      <h2 className="text-4xl font-serif text-center text-blue-950 mb-5">
        Welcome To the BallotBox
      </h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id} className="flex justify-between">
            <div className="flex gap-8 mt-2 bg-green-400 p-4">
              <h3>NAME: {candidate.full_name}</h3>
              <h3>POSITION: {candidate.position}</h3>
              <h3>ABOUT: {candidate.about}</h3>
              <h3>DOB: {new Date(candidate.dob).toLocaleDateString()}</h3>
              <h3>MESSAGE: {candidate.message}</h3>
              <h3>Candidate_id: {candidate._id}</h3>
              <h3>Total Votes: {candidate.totalVotes}</h3> {/* Display total number of votes */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
