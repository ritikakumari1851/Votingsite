import React from 'react'
import img1 from "../assets/service.jpg";
export default function Kschool() {
  return (
   <div>
      <div className=" flex flex-row justify-between pt-32 ml-10">
        <div>
          <h1 className=" text-8xl text-black font-tempo font-extrabold">
          Voting for Schools: A Voting Platform for Any School Vote Online
          </h1>
          <p className=" text-gray-600 text-lg p-5 font-serif ">
            

ElectionBuddy is the easiest solution for any vote in a K-12 School regardless of location or age of the students. We make voting for schools simple and easy. We take the stress and pressure out of your school voting process so you can focus on more important things
          </p>
          <button className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-gray-600 hover:text-white border-2 border-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-gray-900 duration-300  focus:bg-transparent mt-10">
            Explore Our Services
          </button>
        </div>
        <div>
          <img src={img1} className=" size-2/3 ml-[20vh] rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between h-auto w-full border bg-orange-600 mt-4 md:mt-[5vh] py-10 ">
      <div className="text-white mx-4 md:mx-10 mt-4 md:mt-0">
        <div className=" text-4xl text-white font-bold p-10">
          {" "}
          Features
        </div>

        <div className=" ml-4">
       
A comprehensive list detailing how ElectionBuddy meets your voting requirements for 10 voters or 100,000 voters.</div>
        <br />

       

        <button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 mt-10 font-extrabold hover:bg-sky-700">
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
          <p class="z-10 absolute bottom-2 left-2">Explore Remote Voting</p>
        </button>
      </div>
      <div class=" w-2 bg-gradient-to-b from-black to-black h-auto"></div>
      <div className="text-white mx-4 md:mx-10 mt-4 md:mt-0 p-10">
        <div className=" text-4xl p-5 text-white font-bold ">
          {" "}
          Ballot Samples
        </div>
        <div className=" ml-4">
A variety of ballot ideas to meet any voting requirement to can use in electionbuddy or your manual votes.</div>
        <br />

        <button class="border text-gray-50   duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 mt-10 font-extrabold hover:bg-sky-700">
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
          <p class="z-10 absolute bottom-2 left-2">
            Explore In-Person Voting
            </p>
        </button>
      </div>
   
    <div class=" w-2 bg-gradient-to-b from-black to-black h-auto"></div>
    <div className="text-white mx-4 md:mx-10 mt-4 md:mt-0">
        <div className=" text-4xl text-white font-bold p-10">
          {" "}
          Video
        </div>

        <div className=" ml-4">
        See the ElectionBuddy voting process from ballot to confirmation in action for elections or meetings.
        </div>
        <br />

       

        <button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 mt-10 font-extrabold hover:bg-sky-700">
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
          <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
          <p class="z-10 absolute bottom-2 left-2">Explore Remote Voting</p>
        </button>
      </div>
    </div>
    </div>
    
  )
}
