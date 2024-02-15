import React, { useState, useEffect } from "react";
import img1 from "../assets/user.png";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace the URL with your actual backend URL
        const response = await fetch(
          "https://voteonclickbackend.onrender.com/get-user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",

              // Add any headers required for authentication or other purposes
              Authorization: localStorage.getItem("userToken"),
            },
          }
        );

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
    <div>
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="pr-6 p-3 flex items-center text-sm pe-1 font-medium text-gray-300 rounded-full hover:text-blue-200 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 me-2 rounded-full"
          src={img1}
          alt="user photo"
        />
        <p className="font-serif font-bold hover:text-white">
          {userData ? userData.full_name : "Loading..."}
        </p>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </button>
    </div>
  );
}
