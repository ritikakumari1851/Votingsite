import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Votingbox = () => {
  const [candidates, setCandidates] = useState([]);
  const [votedCandidate, setVotedCandidate] = useState(null);
  const [voted, setVoted] = useState(false);
  const { BallotId } = useParams();

  useEffect(() => {
    Axios.get(`https://voteonclickbackend.onrender.com/candidate?ballotId=${BallotId}`)
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => {
        console.log("Error fetching candidates:", error);
      });
  }, [BallotId]);

  const handleVote = async (candidate) => {
    try {
      if (!voted) {
        // Make a POST request to your backend API to submit the vote
        const response = await Axios.post("https://voteonclickbackend.onrender.com/vote", { candidateId: candidate._id });

        // If the vote was successful, set voted state to true
        setVoted(true);
        setVotedCandidate(candidate);
      } else {
        alert("You have already voted.");
      }
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error submitting vote:", error);
    }
  };

  return (
    <div className="bg-blue-200">
      <h2 className="text-4xl font-serif text-center text-blue-800 mb-5">
        Welcome To the BallotBox
      </h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id} className="flex justify-between">
            <div className="flex gap-10 mb-2 mt-2 bg-green-400 p-4">
              <h3>NAME: {candidate.full_name}</h3>{" "}
              <h3>EMAIL: {candidate.email}</h3>
              <h3>POSITION: {candidate.position}</h3>{" "}
              <h3>ABOUT: {candidate.about}</h3>
              <h3>DOB: {candidate.dob}</h3>
              <h3>MESSAGE: {candidate.message}</h3>
              {!voted && (
                <button
                  className="bg-blue-900 py-2 px-10 rounded-xl text-white"
                  onClick={() => handleVote(candidate)}
                >
                  Vote
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {votedCandidate && (
        <p>You have voted for {votedCandidate.full_name}.</p>
      )}
    </div>
  );
};

export default Votingbox;
