import React from "react";

export default function Auth() {
  return (
    <div className=" ">
      <div className="flex flex-col items-center mt-[30vh] ">
        <div>
          <input
            type="text"
            placeholder="Enter Ballot ID:"
            className=" rounded-xl text-md font-serif"
          />
        </div>
        <div>
          <button className="p-2 mt-4 rounded px-10 bg-green-600 hover:bg-green-900 text-md font-serif text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
