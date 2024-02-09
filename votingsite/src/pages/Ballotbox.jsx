import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";

const Ballotbox = () => {
  const [full_name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneno] = useState("");
  const [position, setPosition] = useState("");
  const [about, setAbout] = useState("");
  const [dob, setDob] = useState("");
  const [message, setMessage] = useState("");
  const [ballotID, setBallotID] = useState("");

  const location = useLocation();
  const addCandidate = () => {
    Axios.post("http://localhost:3000/candidate", {
      full_name: full_name,
      email: email,
      phone_no: phone_no,
      position: position,
      about: about,
      dob: dob,
      message: message,
    }).then((response) => {
      if (response.status === 200) {
        alert("Candidate added successfully");
        // Reset the form fields
        setFullname("");
        setMessage("");
        setPosition("");
        setAbout("");
        setPhoneno("");
        setDob("");
        setEmail("");
      } else {
        alert("Error adding candidate");
      }
    });
  };

  // Extracting ballotID from location state
  React.useEffect(() => {
    if (location.state && location.state.ballotID) {
      setBallotID(location.state.ballotID);
    }
  }, [location.state]);

  return (
    <div className=" flex flex-row justify-center mt-10">
      <div class="w-full max-w-[300px] bg-white rounded-lg shadow-md p-6">
        {ballotID && (
          <p className="text-lg font-bold text-gray-800 mb-4">
            Ballot ID: {ballotID}
          </p>
        )}

        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          Candidate Add Form
        </h2>

        <form class="flex flex-col">
          <input
            type="text"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Full Name"
            onChange={(event) => setFullname(event.target.value)}
          />
          <input
            type="email"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="tel"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Phone Number"
            onChange={(event) => setPhoneno(event.target.value)}
          />
          <input
            type="text"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="position"
            onChange={(event) => setPosition(event.target.value)}
          />
          <input
            type="text"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="About"
            onChange={(event) => setAbout(event.target.value)}
          />
          <input
            type="date"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Date of Birth"
            onChange={(event) => setDob(event.target.value)}
          />
          <input
            name="message"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
          />

          <button
            type="submit"
            class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            onClick={addCandidate}
          >
            Submit
          </button>
        </form>
        <button className=" p-3 bg-green-700 mt-10 rounded-xl hover:bg-green-900 font-serif text-gray-200">
          <Link to={"/Candidatelist"}>Check The CandidateList</Link>
        </button>
      </div>
    </div>
  );
};

export default Ballotbox;
