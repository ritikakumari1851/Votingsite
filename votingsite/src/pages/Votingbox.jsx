import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Votingbox = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const { ballotId } = useParams(); // Get the ballotId from the URL parameters

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        // Fetch candidates based on the ballotId parameter from the URL
        const response = await Axios.get(`https://voteonclickbackend.onrender.com/candidate?BallotId=${ballotId}`);
        setCandidates(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching candidates:", error.message);
        setLoading(false);
      }
    };

    fetchCandidates(); // Call the fetchCandidates function when the component mounts
  }, [ballotId]); // Re-run the effect when the ballotId parameter changes

  return (
    <div className="bg-blue-200">
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
                <h3>NAME: {candidate.full_name}</h3>{" "}
                <h3>POSITION: {candidate.position}</h3>{" "}
                <h3>ABOUT: {candidate.about}</h3>
                <h3>DOB: {candidate.dob}</h3>
                <h3>MESSAGE: {candidate.message}</h3>
                <h3>Candidate_id: {candidate._id}</h3>
                
                <button className="bg-blue-900 py-2 px-10 rounded-xl text-white">
                  Vote
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
