import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Votingbox = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [votedCandidates, setVotedCandidates] = useState([]);
  const { ballotId } = useParams();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`https://voteonclickbackend.onrender.com/candidate?BallotId=${ballotId}`);
        setCandidates(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching candidates:", error.message);
        setLoading(false);
      }
    };

    fetchCandidates();
  }, [ballotId]);

  const handleVote = async (candidateId) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      const response = await Axios.post(
        "https://voteonclickbackend.onrender.com/vote",
        { candidateId },
        { headers: { Authorization: `Bearer ${token}` } } // Include token in the headers
      );
      console.log("Vote submitted successfully:", response.data);
      setVotedCandidates([...votedCandidates, candidateId]);
    } catch (error) {
      console.error("Error submitting vote:", error.message);
    }
  };

  return (
    <div className="bg-blue-200">
      <h2 className="text-4xl font-serif text-center text-blue-800 mb-5">
        Ballot ID: {ballotId}
      </h2>
      <h2 className="text-4xl font-serif text-center text-blue-800 mb-5">
        Welcome To the BallotBox
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
                <button
                  onClick={() => handleVote(candidate._id)}
                  className="bg-blue-900 py-2 px-10 rounded-xl text-white"
                  disabled={votedCandidates.includes(candidate._id)}
                >
                  {votedCandidates.includes(candidate._id) ? "Voted" : "Vote"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Votingbox;
