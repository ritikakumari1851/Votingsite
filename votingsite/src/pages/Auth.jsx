import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Auth() {
  const [enteredID, setEnteredID] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setEnteredID(event.target.value);
  };
  useEffect(() => {
    // Retrieve the ballotID from localStorage on component mount
    const storedBallotID = localStorage.getItem("ballotID");
    if (storedBallotID) {
      setBallotID(storedBallotID);
    }
  }, []);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (enteredID === ballotID) {
      navigate("/votingbox");
    } else {
      alert("Entered ID does not match the Ballot ID");
    }
  };

  return (
    <div className=" ">
      <div className="flex flex-col items-center mt-[30vh] ">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter Ballot ID:"
            className="rounded-xl text-md font-serif"
            value={enteredID}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="p-2 mt-4 rounded px-10 bg-green-600 hover:bg-green-900 text-md font-serif text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
