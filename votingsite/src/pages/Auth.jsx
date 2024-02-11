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
    navigate(`/votingbox/${BallotId}`);
  };

  return (
    <div>
      <h2>Enter Ballot ID</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={BallotId} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Auth;
