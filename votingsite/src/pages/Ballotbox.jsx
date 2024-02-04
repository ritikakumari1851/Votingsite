import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Ballotbox() {
  const [numberOfForms, setNumberOfForms] = useState(1);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState(
    Array.from({ length: 1 }, () => ({
      profilePicture: null,
      fullname: "",
      email: "",
      about: "",
      mobile_no: "",
      adhar_no: "",
      position: "",
    }))
  );

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumberOfForms(isNaN(value) ? 1 : value);
    setFormData(
      Array.from({ length: value }, () => ({
        profilePicture: null,
        fullname: "",
        email: "",
        about: "",
        mobile_no: "",
        adhar_no: "",
        position: "",
      }))
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/candidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData[currentFormIndex]),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log(`Form ${currentFormIndex + 1} submitted successfully`);

      setCurrentFormIndex((prevIndex) => prevIndex + 1);

      if (currentFormIndex + 1 === numberOfForms) {
        setSuccessMessage("All forms submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFormChange = (index, field, value) => {
    setFormData((prevData) =>
      prevData.map((data, i) => (i === index ? { ...data, [field]: value } : data))
    );
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevData) =>
        prevData.map((data, i) =>
          i === currentFormIndex ? { ...data, profilePicture: reader.result } : data
        )
      );
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const renderCurrentForm = () => {
    if (currentFormIndex >= numberOfForms) {
      return null;
    }

    const data = formData[currentFormIndex];

    return (
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6 mb-4">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Candidate Registration</h2>
        <form className="flex flex-wrap" onSubmit={handleSubmit}>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
          />
          {data.profilePicture && (
            <div>
              <p>Selected Image:</p>
              <img
                src={data.profilePicture}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            </div>
          )}
          <input
            type="text"
            value={data.fullname}
            onChange={(e) => handleFormChange(currentFormIndex, "fullname", e.target.value)}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
            placeholder="Full Name"
          />
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleFormChange(currentFormIndex, "email", e.target.value)}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
            placeholder="Email"
          />
          <input
            type="text"
            value={data.about}
            onChange={(e) => handleFormChange(currentFormIndex, "about", e.target.value)}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
            placeholder="About"
          />
          <input
            type="mobile_no"
            value={data.mobile_no}
            onChange={(e) => handleFormChange(currentFormIndex, "mobile_no", e.target.value)}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
            placeholder="Mobile Number"
          />
          <input
            type="number"
            value={data.adhar_no}
            onChange={(e) => handleFormChange(currentFormIndex, "adhar_no", e.target.value)}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
            placeholder="Adhar Number"
          />
          <input
            type="text"
            value={data.position}
            onChange={(e) => handleFormChange(currentFormIndex, "position", e.target.value)}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
            placeholder="Position"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Save Form {currentFormIndex + 1}
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <Link to={"/dashboard"}>
        <button className="button">{"<="}</button>
      </Link>

      <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <label>
            Enter the number of Candidate You want to register:
            <input
              type="number"
              value={numberOfForms}
              onChange={handleInputChange}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
            />
          </label>

          {renderCurrentForm()}

          {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
        </div>
      </div>
    </div>
  );
}
