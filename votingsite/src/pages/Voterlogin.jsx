import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Voterlogin() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigation = useNavigate();
  function handlelogin(e) {
    e.preventDefault();
    const body = { email, password };
    fetch("http://localhost:3000/voterlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        if (response.ok) {
          const json = await response.json();
          console.log(json.token);
          localStorage.setItem("userToken", json.token);
          alert("Login successful");
          navigation("/Auth");
        } else {
          // Handle non-JSON responses here
          const text = await response.text();
          alert(`Response was not successful: ${text}`);
        }
      })
      .catch((error) => alert(error));
  }
  return (
    <div className=" pt-32 flex justify-center">
      <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-blue-200">
        <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span class="text-[#7747ff]">App</span>
        </div>
        <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form class="flex flex-col gap-3" onSubmit={handlelogin}>
          <div class="block relative">
            <label
              for="email"
              class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              onChange={(e) => setemail(e.target.value)}
            />
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
              id="password"
              class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div>
            <a class="text-sm text-[#7747ff]" href="#">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div class="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <p class="text-sm text-[#7747ff]">
            <Link to={"/Voteregister"}>Sign up for free!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
