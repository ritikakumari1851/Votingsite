import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex w-1/2">
        <img
          src="..\src\assets\At the office-pana.png"
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex w-1/2 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">Sign in to your account</h1>
        <p className="mb-8">
          Not a member?{" "}
          <a href="signup.html" className="text-blue-500">
            Start a 14 day free trial
          </a>
        </p>
        <form className="w-1/2">
          <input
            type="text"
            placeholder="Email address"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="block w-full p-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            Sign in
          </button>
        </form>
    
        <p className=" pb-2 flex text-blue-700">
            <p className=" text-black pr-2">Trouble logging in? </p> Forgot password
            </p>
     
        <p className=" flex text-blue-700">
            <p className=" text-black pr-2">Don't have a Account? </p> Sign up
       
        </p>
    
      </div>
    </div>
  );
};

export default Login;