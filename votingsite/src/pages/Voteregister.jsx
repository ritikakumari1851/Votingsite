import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Voteregister() {
  const [full_name, setfull_name] = useState();
  const [email, setemail] = useState();
  const [username, setusername] = useState();
  const [Dob, setDob] = useState();
  const [gender, setgender] = useState();
  const [mobile_no, setmobile_no] = useState();
  const [password, setpassword] = useState();

  function handleRegister(e) {
    e.preventDefault();
    const body = {
      full_name,
      email,
      username,
      Dob,
      gender,
      mobile_no,
      password,
    };
    fetch("http://localhost:3000/voteregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status == 201) {
          return response.json();
        } else {
          return response.json();
        }
      })
      .then((json) => alert(json.message))
      .catch((error) => {
        if (error.response) {
          // If the error has a response property, handle it
          alert(error.response.message);
        } else {
          // Otherwise, handle other errors
          alert(error.message);
        }
      });
      
  }

  return (
    <div>
      <div className=" pt-32 flex justify-center ">
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-blue-200">
          <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome To <span class="text-[#7747ff]">App</span>
          </div>
          <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Create account
          </div>
          <form class="flex flex-col gap-3" onSubmit={handleRegister}>
            <div className=" flex  gap-10">
              <div>
                <div class="block relative">
                  <label
                    for="email"
                    class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="Email"
                    class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div class="block relative">
                  <label
                    for="name"
                    class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Full_name
                  </label>
                  <input
                    type="text"
                    class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                    onChange={(e) => setfull_name(e.target.value)}
                  />
                </div>
                <div class="block relative">
                  <label
                    for="username"
                    class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                    onChange={(e) => setusername(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div class="block relative">
                  <label
                    for="Mobile_no"
                    class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Mobile_no
                  </label>
                  <input
                    type="number"
                    class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                    onChange={(e) => setmobile_no(e.target.value)}
                  />
                </div>
                <div class="block relative">
                  <label
                    for="DOB"
                    class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    DOB
                  </label>
                  <input
                    type="Date"
                    class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div class="block relative">
                  <label
                    for="email"
                    class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                    onChange={(e) => setgender(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="block relative">
              <label
                for="password"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                type="password"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div class="text-sm text-center mt-[1.6rem]">
            Already have a Account?{" "}
            <a class="text-sm text-[#7747ff]" href="#">
              <Link to={"/voterlog"}>Sign in!</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
