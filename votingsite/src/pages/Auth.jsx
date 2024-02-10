import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth({ ballotID }) {
  const [enteredID, setEnteredID] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setEnteredID(event.target.value);
  };

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
