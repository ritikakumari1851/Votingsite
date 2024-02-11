import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [BallotId, setBallotId] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBallotId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Votingbox/${BallotId}`);
  };

  return (
    <div>
      <div className=" flex flex-col items-center mt-[30vh]">
        <h2 className=" font-serif">Enter Ballot ID:</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={BallotId} onChange={handleChange} />
          <div>
            <button
              type="submit"
              className=" bg-blue-800 p-2 font-serif w-full mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
