import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Voterlist = () => {
  const [voters, setVoters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoters = async () => {
      try {
        const response = await axios.get('https://voteonclickbackend.onrender.com/voters'); // Assuming your backend endpoint is '/api/voters'
        setVoters(response.data.voters);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchVoters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Voters Data:</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {voters.map((voter) => (
            <tr key={voter._id}>
              <td>{voter.full_name}</td>
              <td>{voter.email}</td>
              <td>{voter.username}</td>
              <td>{new Date(voter.Dob).toLocaleDateString()}</td>
              <td>{voter.gender}</td>
              <td>{voter.mobile_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Voterlist;
