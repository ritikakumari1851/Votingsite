import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function Editform() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace the URL with your actual backend URL
        const response = await fetch("https://voteonclickbackend.onrender.com/get-user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",

            // Add any headers required for authentication or other purposes
            Authorization: localStorage.getItem("userToken"),
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data.user);
        } else {
          console.error("Error fetching user data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className=" ">
      <p className=" text-3xl font-serif m-3 text-black">Edit Your Profile</p>
      <form className=" text-black">
        <div class="mb-3">
          <label class="small mb-1" for="inputUsername">
            Username (how your name will appear to other users on the site)
          </label>
          <p
            class="form-control"
            id="inputUsername"
            type="text"
            value="username"
          >
            {" "}
            {userData ? userData.username : "Loading..."}{" "}
          </p>
        </div>

        <div class="row gx-3 mb-3">
          <div class="col-md-6">
            <label class="small mb-1" for="inputFirstName">
              Name
            </label>
            <p
              class="form-control"
              id="inputFirstName"
              type="text"
              placeholder="Enter your first name"
              value="Valerie"
            >
              {" "}
              {userData ? userData.full_name : "Loading..."}{" "}
            </p>
          </div>

          <div class="col-md-6">
            <label class="small mb-1" htmlFor="Gender">
              Gender
            </label>
            <input
              class="form-control"
              id="inputLastName"
              type="text"
              placeholder="Gender"
              value="Female"
            />
          </div>
        </div>

        <div class="row gx-3 mb-3">
          <div class="col-md-6">
            <label class="small mb-1" for="inputOrgName">
              Identification no
            </label>
            <p
              class="form-control"
              id="inputOrgName"
              type="text"
              placeholder="Enter your identification no."
              value="N/A"
            >
              {" "}
              {userData ? userData._id : "Loading..."}{" "}
            </p>
          </div>
        </div>

        <div class="mb-3">
          <label class="small mb-1" for="inputEmailAddress">
            Email address
          </label>
          <p
            class="form-control"
            id="inputEmailAddress"
            type="email"
            placeholder="Enter your email address"
            value="here@example.com"
          >
            {userData ? userData.email : "Loading..."}{" "}
          </p>
        </div>

        <div class="row gx-3 mb-3">
          <div class="col-md-6">
            <label class="small mb-1" for="inputPhone">
              Phone number
            </label>
            <p
              class="form-control"
              id="inputPhone"
              type="tel"
              placeholder="Enter your phone number"
              value="555-123-4567"
            >
              N/A
            </p>
          </div>

          <div class="col-md-6">
            <label class="small mb-1" for="inputBirthday">
              Birthday
            </label>
            <p
              class="form-control"
              id="inputBirthday"
              type="text"
              name="birthday"
              placeholder="Enter your birthday"
              value="06/10/1988"
            >
              {userData ? userData.Dob : "Loading..."}{" "}
            </p>
          </div>
        </div>

        <button
          className="btn btn-primary bg-blue-900 rounded-lg p-3 mb-4 text-gray-300 font-serif"
          type="button"
        >
          Save changes
        </button>
      </form>
    </div>
  );
}
