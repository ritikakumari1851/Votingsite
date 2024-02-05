import React, { useState, useEffect } from "react";
import Axios from "axios";

const Votingbox = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/candidate")
      .then((response) => {
        setCandidates(response.data);
      })
      .catch(() => {
        console.log("Error fetching candidates");
      });
  }, []);

  return (
    <div className=" bg-blue-200 ">
      <h2 className=" text-4xl font-serif text-center text-blue-800 mb-5">
        Welcome To the BallotBox{" "}
      </h2>
      <ul className=" ">
        {candidates.map((candidate) => (
          <li key={candidate._id} className=" flex justify-between">
            <div className=" flex gap-10 mb-2 mt-2 bg-green-400 p-4">
              <h3>NAME: {candidate.full_Name}</h3>{" "}
              <h3 className="">EMAIL :{candidate.email}</h3>
              <h3 className=" ">POSITION : {candidate.position}</h3>{" "}
              <h3 className="">ABOUT : {candidate.about}</h3>
              <h3 className=""> DOB :{candidate.dob}</h3>
              <h3 className=""> MESSAGE {candidate.message}</h3>
              <button
                className=" bg-blue-900 py-2 px-10 rounded-xl text-white"
               
              >
                Vote
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Votingbox;
