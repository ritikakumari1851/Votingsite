// ResultPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Result = () => {
  const [candidates, setCandidates] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.get('/api/result/yourBallotId');
        setCandidates(response.data.candidates);
        setTotalVotes(response.data.totalVotes);
      } catch (error) {
        console.error('Error fetching result:', error);
      }
    };
    fetchResult();
  }, []);

  return (
    <div>
      <h1>Voting Result</h1>
      <table>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate._id}>
              <td>{candidate.full_name}</td>
              <td>{candidate.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Votes: {totalVotes}</p>
    </div>
  );
};

export default Result;
