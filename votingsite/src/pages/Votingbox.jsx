import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Votingbox = () => {
  const [candidates, setCandidates] = useState([]);
  const [votedCandidate, setVotedCandidate] = useState(null); // State to track the voted candidate
  const { BallotId } = useParams(); // Get ballotId from URL params

  useEffect(() => {
    const fetchCandidates = async () => {
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

    fetchCandidates(); // Call the fetchCandidates function when the component mounts
  }, [BallotId]); // Add ballotId to dependency array to fetch candidates when it changes

  const handleVote = async (candidateId) => {
    try {
      // Retrieve voterId from localStorage or wherever it's stored after login
      const voterId = localStorage.getItem("voterId");
  
      // Submit the vote with the extracted voterId and candidateId
      await Axios.post("https://voteonclickbackend.onrender.com/vote", {
        voterId: voterId,
        candidateId: candidateId,
      });
  
      // Update votedCandidate state to the selected candidate
      setVotedCandidate(candidateId);
  
      // Optional: Update UI to indicate successful vote
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === "Voter already voted") {
        // Display an alert if the voter has already voted
        alert("You have already voted."); // Display alert
      } else {
        console.error("Error submitting vote:", error.message);
        console.log("Response data:", error.response.data); // Log the response data
        // Optional: Update UI to indicate voting error
      }
    }
  };
  function logout() {
    localStorage.removeItem("userToken");
    alert("Logged out Successfully");
  }
  
  return (
    <div className="bg-blue-200">
      <h2 className="text-4xl font-serif text-center text-blue-950 mb-5 pt-10">
        Ballot ID: {BallotId}
      </h2>
      <h2 className="text-4xl font-serif text-center text-blue-950 mb-5">
        Welcome To the BallotBox
      </h2>
      <button onClick={logout}
  class="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
>
  <div
    class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
  >
    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
      <path
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      ></path>
    </svg>
  </div>
  <div
    class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
  >
    Logout
  </div>
</button>

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
              {votedCandidate === candidate._id ? (
                <h3>Voted</h3>
              ) : (
                <button
                  className="bg-blue-900 p-2 px-8 rounded-lg text-white"
                  onClick={() => handleVote(candidate._id)}
                >
                   <Link to={"/Login"} className="flex items-center">
                  VOTE</Link>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Votingbox;
